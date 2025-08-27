package com.wipro.productmngmt2.dto;

import lombok.Data;

@Data
public class OrderRequest {
	private Integer productId;
    private Integer qty;
}
