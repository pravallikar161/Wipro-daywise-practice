package com.wipro.flightdata_ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.flightdata_ms.entity.Flight;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, String> {
	List<Flight> findBySourceAndDestinationAndStartDateLessThanEqualAndEndDateGreaterThanEqual(
            String source, String destination, LocalDate date1, LocalDate date2);

}
