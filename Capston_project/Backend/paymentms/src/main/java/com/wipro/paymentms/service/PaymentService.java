package com.wipro.paymentms.service;

import java.time.YearMonth;
import java.time.format.DateTimeFormatter;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.wipro.paymentms.dto.PaymentRequestMessage;
import com.wipro.paymentms.dto.PaymentResultMessage;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final KafkaTemplate<String, Object> kafkaTemplate = null;

    private static final String RESULT_TOPIC = "T2"; // response topic

    public PaymentResultMessage processSync(PaymentRequestMessage req) {
        boolean valid = validate(req.getCardNumber(), req.getExpiry());
        String status = valid ? "SUCCESS" : "FAILED";
        String reason = valid ? "OK" : "Invalid card or expiry";
        return new PaymentResultMessage(req.getBookingId(), status, reason);
    }

    // Consumes requests from T1, produces results to T2
    @KafkaListener(topics = "T1", groupId = "payment-group")
    public void onPaymentRequest(PaymentRequestMessage req) {
        PaymentResultMessage result = processSync(req);
        kafkaTemplate.send(RESULT_TOPIC, req.getBookingId(), result);
    }

    private boolean validate(String card, String expiry) {
        if (card == null || card.length() != 16) return false;
        // Optional: ensure all digits
        for (int i = 0; i < card.length(); i++) {
            if (!Character.isDigit(card.charAt(i))) return false;
        }
        try {
            DateTimeFormatter fmt = DateTimeFormatter.ofPattern("MM/yyyy");
            YearMonth ym = YearMonth.parse(expiry, fmt);
            return ym.atEndOfMonth().isAfter(java.time.LocalDate.now());
        } catch (Exception e) {
            return false;
        }
    }
}

