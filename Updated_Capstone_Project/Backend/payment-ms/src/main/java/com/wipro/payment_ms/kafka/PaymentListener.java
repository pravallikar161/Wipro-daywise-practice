package com.wipro.payment_ms.kafka;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.payment_ms.dto.PaymentMessage;
import com.wipro.payment_ms.service.PaymentService;

@Component
@RequiredArgsConstructor
public class PaymentListener {
	 private final PaymentService paymentService;

	    @KafkaListener(topics = "T1", groupId = "payment-group")
	    public void listen(String message) throws Exception {
	        ObjectMapper mapper = new ObjectMapper();
	        PaymentMessage msg = mapper.readValue(message, PaymentMessage.class);
	        paymentService.processPayment(msg);
	    }

}
