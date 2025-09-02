package com.wipro.flightms.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.flightms.entity.FlightEntity;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<FlightEntity, Long> {
    List<FlightEntity> findBySourceAndDestinationAndTravelDate(String source, String destination, LocalDate travelDate);
}
