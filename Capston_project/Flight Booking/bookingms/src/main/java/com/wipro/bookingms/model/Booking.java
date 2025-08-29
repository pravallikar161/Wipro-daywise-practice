package com.wipro.bookingms.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String flightRef; // id returned by Flight Data MS
    private String passengerName;
    private String passengerEmail;
    private String source;
    private String destination;
    private String travelDate; // ISO yyyy-MM-dd (simple for now)
    private Double amount;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    private LocalDateTime createdAt = LocalDateTime.now();

    // getters and setters
    // (generate with IDE or paste manually)
}

