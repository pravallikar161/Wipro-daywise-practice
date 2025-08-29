package com.wipro.flightms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FlightmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(FlightmsApplication.class, args);
    }
}

