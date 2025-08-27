package com.wipro.productmngmt2.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.productmngmt2.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

}
