package com.wipro.booking_ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.booking_ms.entity.Booking;
import org.springframework.stereotype.Repository;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

}
