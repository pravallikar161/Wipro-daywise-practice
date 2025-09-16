package com.wipro.flightdata_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FlightdataMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightdataMsApplication.class, args);
	}

}
