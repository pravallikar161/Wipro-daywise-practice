package com.wipro.productmngmt2.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.productmngmt2.entity.Product;
import com.wipro.productmngmt2.repo.ProductRepo;
import com.wipro.productmngmt2.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepo productRepo;

	@Override
	public List<Product> findAll() {
		return productRepo.findAll();
	}

	@Override
	public Product findById(int id) {
		Optional<Product> optionalProduct = productRepo.findById(id);
		
		if(optionalProduct.isPresent()) {
			return optionalProduct.get();
		}
		
		return null;
	}

	@Override
	public void deleteById(int id) {
		productRepo.deleteById(id);
	}

	@Override
	public void save(Product product) {
		productRepo.save(product);
	}

}
