package com.wipro.flightms.entity;

import jakarta.persistence.*;
import lombok.Getter; import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter @Setter
@Entity @Table(name = "flights")
public class FlightEntity {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String flightNumber;
  private String aircraftName;
  private String source;
  private String destination;

  private LocalDate travelDate;
  private LocalDateTime departureTime;
  private LocalDateTime arrivalTime;

  private BigDecimal price;
}
