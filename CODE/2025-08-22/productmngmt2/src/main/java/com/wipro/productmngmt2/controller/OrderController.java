package com.wipro.productmngmt2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.productmngmt2.dto.OrderRequest;
import com.wipro.productmngmt2.dto.OrderResponse;
import com.wipro.productmngmt2.service.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:4200") 
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	 @PostMapping
	 public OrderResponse placeOrder(@RequestBody OrderRequest request) {
		 return orderService.placeOrder(request);
	 }

	 @GetMapping
	 public List<OrderResponse> listOrders() {
		 return orderService.findAll();   
	 }

}
