package com.wipro.flightdata_ms.service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.wipro.flightdata_ms.entity.Flight;
public interface FlightService {
	List<Flight> searchFlights(String source, String destination, LocalDate date);
	Optional<Flight> getFlightById(String id);

}
