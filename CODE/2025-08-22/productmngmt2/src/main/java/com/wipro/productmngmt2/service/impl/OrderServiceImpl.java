package com.wipro.productmngmt2.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.wipro.productmngmt2.dto.OrderRequest;
import com.wipro.productmngmt2.dto.OrderResponse;
import com.wipro.productmngmt2.entity.OrderHeader;
import com.wipro.productmngmt2.entity.Product;
import com.wipro.productmngmt2.repo.OrderHeaderRepo;
import com.wipro.productmngmt2.service.OrderService;
import com.wipro.productmngmt2.service.ProductService;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	OrderHeaderRepo orderHeaderRepo;

	@Override
	public OrderResponse placeOrder(OrderRequest req) {
		
		Product product = productService.findById(req.getProductId());
        if (product.getQty() < req.getQty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "Not enough stock, available: " + product.getQty());
        }
        product.setQty(product.getQty() - req.getQty());
        productService.save(product);

        OrderHeader oh = new OrderHeader();
        oh.setProduct(product);
        oh.setQty(req.getQty());
        oh = orderHeaderRepo.save(oh);

        return new OrderResponse(oh);
	}

	@Override
	public List<OrderResponse> findAll() {
		
		return orderHeaderRepo.findAll().stream().map(OrderResponse::new).toList();
	}

}
