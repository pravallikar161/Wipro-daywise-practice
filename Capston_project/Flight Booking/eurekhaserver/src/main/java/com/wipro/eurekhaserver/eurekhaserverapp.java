package com.wipro.eurekhaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class eurekhaserverapp {
  public static void main(String[] args) { SpringApplication.run(eurekhaserverapp.class, args); }
}
