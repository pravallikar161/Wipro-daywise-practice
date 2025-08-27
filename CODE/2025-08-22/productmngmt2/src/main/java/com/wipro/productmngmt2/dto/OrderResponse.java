package com.wipro.productmngmt2.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wipro.productmngmt2.entity.OrderHeader;

import lombok.Data;

@Data
public class OrderResponse {
	
	private Long id;
    private String productName;
    private Integer qty;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime orderDate;

    public OrderResponse(OrderHeader oh) {
        this.id = oh.getId();
        this.productName = oh.getProduct().getName();
        this.qty = oh.getQty();
        this.orderDate = oh.getOrderDate();
    }

}
