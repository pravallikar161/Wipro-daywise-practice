package com.wipro.payment_ms.service;

import com.wipro.payment_ms.dto.PaymentMessage;

public interface PaymentService {
	void processPayment(PaymentMessage message);

}
