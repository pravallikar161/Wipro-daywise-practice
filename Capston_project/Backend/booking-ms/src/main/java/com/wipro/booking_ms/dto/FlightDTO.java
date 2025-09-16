package com.wipro.booking_ms.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlightDTO {
	private String flightId;
    private String airline;
    private String source;
    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private double price;

}
