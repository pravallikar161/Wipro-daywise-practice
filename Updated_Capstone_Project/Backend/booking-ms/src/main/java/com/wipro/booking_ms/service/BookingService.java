package com.wipro.booking_ms.service;

import java.util.List;

import com.wipro.booking_ms.dto.BookingRequest;
import com.wipro.booking_ms.dto.BookingResponse;
import com.wipro.booking_ms.dto.FlightDTO;
import com.wipro.booking_ms.dto.SearchDTO;
import com.wipro.booking_ms.entity.Booking;

public interface BookingService {
	List<FlightDTO> searchFlights(SearchDTO dto);
    BookingResponse bookFlight(BookingRequest request);
    void updateStatus(Long bookingId, String status);
    Booking getBookingById(Long bookingId);
}
