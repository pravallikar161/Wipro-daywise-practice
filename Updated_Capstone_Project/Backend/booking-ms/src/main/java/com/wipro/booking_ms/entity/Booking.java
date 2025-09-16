package com.wipro.booking_ms.entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private String flightId;
    private String userEmail;
    private String username;
    private String gender;
    private int age;
    private LocalDate travelDate;
    private double amount;
    private String status;

}
