package com.wipro.flightdata_ms.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import com.wipro.flightdata_ms.entity.Flight;
import com.wipro.flightdata_ms.repository.FlightRepository;
import com.wipro.flightdata_ms.service.FlightService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/flights")
@RequiredArgsConstructor
public class FlightController {
	private final FlightService flightService;

    @GetMapping("/search")
    public List<Flight> search(@RequestParam String source,
                               @RequestParam String destination,
                               @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return flightService.searchFlights(source, destination, date);
    }
    @GetMapping("/{id}")
    public Flight getFlightById(@PathVariable String id) {
        return flightService.getFlightById(id)
                .orElseThrow(() -> new RuntimeException("Flight not found with id: " + id));
    }


}
