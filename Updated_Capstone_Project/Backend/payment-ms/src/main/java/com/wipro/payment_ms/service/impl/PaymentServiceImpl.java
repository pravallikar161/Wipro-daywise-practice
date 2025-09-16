package com.wipro.payment_ms.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.payment_ms.dto.PaymentMessage;
import com.wipro.payment_ms.dto.PaymentStatus;
import com.wipro.payment_ms.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{
	private final KafkaTemplate<String, String> kafkaTemplate;

    @Override
    public void processPayment(PaymentMessage message) {
        try {
        	String status = "Successful";
            PaymentStatus response = new PaymentStatus(message.getBookingId(), status);
            String result = new ObjectMapper().writeValueAsString(response);
            kafkaTemplate.send("T2", result);
        } catch (Exception e) {
            throw new RuntimeException("Error processing payment", e);
        }
    }

}
