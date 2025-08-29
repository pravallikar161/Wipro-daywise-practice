package com.wipro.paymentms.service;

import com.wipro.paymentms.model.Payment;
import com.wipro.paymentms.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment makePayment(Long bookingId, Double amount, String method) {
        Payment payment = new Payment(bookingId, amount, method, LocalDateTime.now());
        return paymentRepository.save(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }
}
