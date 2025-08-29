package com.wipro.flightms.controller;

import com.wipro.flightms.entity.FlightEntity;
import com.wipro.flightms.repository.FlightRepository;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {

    private final FlightRepository flightRepository;

    public FlightController(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    @GetMapping("/search")
    public List<FlightEntity> searchFlights(
            @RequestParam String source,
            @RequestParam String destination,
            @RequestParam String travelDate) {
        LocalDate date = LocalDate.parse(travelDate);
        return flightRepository.findBySourceAndDestinationAndTravelDate(source, destination, date);
    }
}
