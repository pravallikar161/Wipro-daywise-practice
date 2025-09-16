package com.wipro.booking_ms.service.impl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.booking_ms.dto.BookingRequest;
import com.wipro.booking_ms.dto.BookingResponse;
import com.wipro.booking_ms.dto.FlightDTO;
import com.wipro.booking_ms.dto.PaymentMessage;
import com.wipro.booking_ms.dto.SearchDTO;
import com.wipro.booking_ms.entity.Booking;
import com.wipro.booking_ms.repository.BookingRepository;
import com.wipro.booking_ms.service.BookingService;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService{
	 private final BookingRepository bookingRepository;
	    private final KafkaTemplate<String, String> kafkaTemplate;
	    private final RestTemplate restTemplate;
	    @Override
	    public List<FlightDTO> searchFlights(SearchDTO dto) {
	        String url = "http://localhost:8081/api/flights/search?source=" + dto.getSource()
	                + "&destination=" + dto.getDestination()
	                + "&date=" + dto.getDate();
	        return Arrays.asList(Objects.requireNonNull(restTemplate.getForObject(url, FlightDTO[].class)));
	    }
	    @Override
	    public BookingResponse bookFlight(BookingRequest request) {
	        Booking booking = new Booking(null, request.getFlightId(), request.getUserEmail(),request.getUsername(),
	                request.getGender(),request.getAge(),request.getTravelDate(), request.getAmount(), "initiated");

	        booking = bookingRepository.save(booking);

	        PaymentMessage message = new PaymentMessage(booking.getBookingId(), booking.getAmount(), request.getMode());
	        
	        try {
	            String jsonMessage = new ObjectMapper().writeValueAsString(message);
	            kafkaTemplate.send("T1", jsonMessage);
	        } catch (JsonProcessingException e) {
	            throw new RuntimeException("Failed to serialize PaymentMessage", e);
	        }

	        return new BookingResponse(booking.getBookingId(), booking.getStatus());
	    }

	    @Override
	    public void updateStatus(Long bookingId, String status) {
	        Booking booking = bookingRepository.findById(bookingId)
	                .orElseThrow(() -> new RuntimeException("Booking not found"));
	        booking.setStatus(status);
	        bookingRepository.save(booking);
	    }
	    @Override
	    public Booking getBookingById(Long bookingId) {
	        return bookingRepository.findById(bookingId)
	                .orElseThrow(() -> new RuntimeException("Booking not found"));
	    }


}
