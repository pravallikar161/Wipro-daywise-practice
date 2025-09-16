package com.wipro.booking_ms.kafka;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.booking_ms.dto.PaymentStatus;
import com.wipro.booking_ms.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class PaymentStatusListener {
	@Autowired
    private BookingService bookingService;

    @KafkaListener(topics = "T2", groupId = "booking-group")
    public void listen(String message) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        PaymentStatus status = mapper.readValue(message, PaymentStatus.class);
        bookingService.updateStatus(status.getBookingId(), status.getStatus());
    }

}
