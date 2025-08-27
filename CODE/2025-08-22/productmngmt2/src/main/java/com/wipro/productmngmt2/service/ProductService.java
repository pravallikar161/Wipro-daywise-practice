package com.wipro.productmngmt2.service;

import java.util.List;

import com.wipro.productmngmt2.entity.Product;

public interface ProductService {
	void save(Product product);
	List<Product> findAll();
	Product findById(int id);
	void deleteById(int id);
}
