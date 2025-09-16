package com.wipro.booking_ms.controller;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import com.lowagie.text.Document;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import com.wipro.booking_ms.dto.BookingRequest;
import com.wipro.booking_ms.dto.BookingResponse;
import com.wipro.booking_ms.dto.FlightDTO;
import com.wipro.booking_ms.dto.SearchDTO;
import com.wipro.booking_ms.entity.Booking;
import com.wipro.booking_ms.service.BookingService;
import org.springframework.http.MediaType;

import java.io.ByteArrayOutputStream;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {
	private final BookingService bookingService;

    @PostMapping("/search")
    public List<FlightDTO> search(@RequestBody SearchDTO dto) {
        return bookingService.searchFlights(dto);
    }

    @PostMapping("/book")
    public BookingResponse book(@RequestBody BookingRequest request) {
        return bookingService.bookFlight(request);
    }
    @GetMapping("/status")
    public BookingResponse getStatus(@RequestParam Long bookingId) {
        Booking booking = bookingService.getBookingById(bookingId);
        return new BookingResponse(booking.getBookingId(), booking.getStatus());
    }


    @PostMapping("/update-status")
    public void updateStatus(@RequestParam Long bookingId, @RequestParam String status) {
        bookingService.updateStatus(bookingId, status);
    }
    @GetMapping(value = "/download", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<byte[]> download(@RequestParam Long bookingId) {
        Booking booking = bookingService.getBookingById(bookingId);

        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            Document document = new Document();
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(new Paragraph("Booking Confirmation"));
            document.add(new Paragraph("Booking ID: " + booking.getBookingId()));
            document.add(new Paragraph("Flight ID: " + booking.getFlightId()));
            document.add(new Paragraph("Username: " + booking.getUsername()));
            document.add(new Paragraph("Gender: " + booking.getGender()));
            document.add(new Paragraph("Age: " + booking.getAge()));
            document.add(new Paragraph("Email: " + booking.getUserEmail()));
            document.add(new Paragraph("Status: " + booking.getStatus()));
            document.close();

            return ResponseEntity.ok()
            	.header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=booking-" + bookingId + ".pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(out.toByteArray());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
 