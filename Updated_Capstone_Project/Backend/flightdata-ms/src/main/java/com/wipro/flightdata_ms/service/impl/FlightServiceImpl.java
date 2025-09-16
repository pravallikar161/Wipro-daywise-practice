package com.wipro.flightdata_ms.service.impl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.wipro.flightdata_ms.entity.Flight;
import com.wipro.flightdata_ms.repository.FlightRepository;
import com.wipro.flightdata_ms.service.FlightService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FlightServiceImpl implements FlightService{
	private final FlightRepository flightRepository;

    @Override
    public List<Flight> searchFlights(String source, String destination, LocalDate date) {
        return flightRepository.findBySourceAndDestinationAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
                source, destination, date, date);
    }
    @Override
    public Optional<Flight> getFlightById(String id) {
        return flightRepository.findById(id);
    }


}
