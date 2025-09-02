package com.wipro.flightms.repository;

import com.wipro.flightms.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface FlightRepository extends JpaRepository<FlightEntity, Long> {
  List<Flight> findBySourceIgnoreCaseAndDestinationIgnoreCaseAndTravelDate(
      String source, String destination, LocalDate travelDate);
}
