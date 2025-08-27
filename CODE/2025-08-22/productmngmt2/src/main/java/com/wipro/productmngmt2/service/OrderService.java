package com.wipro.productmngmt2.service;

import java.util.List;

import com.wipro.productmngmt2.dto.OrderRequest;
import com.wipro.productmngmt2.dto.OrderResponse;

public interface OrderService {
	
	OrderResponse placeOrder(OrderRequest req);
	List<OrderResponse> findAll();
}
