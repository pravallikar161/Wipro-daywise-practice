package com.wipro.payment_ms.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.wipro.payment_ms.dto.PaymentMessage;
import com.wipro.payment_ms.service.PaymentService;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {
	private final PaymentService paymentService;

    @PostMapping("/simulate")
    public String simulatePayment(@RequestBody PaymentMessage message) {
        paymentService.processPayment(message);
        return "Payment processed (simulated)";
    }

}
