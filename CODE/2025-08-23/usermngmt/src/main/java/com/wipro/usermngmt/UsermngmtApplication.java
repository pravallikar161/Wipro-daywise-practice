package com.wipro.usermngmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class UsermngmtApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermngmtApplication.class, args);
	}

}
