package com.wipro.food.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.food.entity.Food;

@Repository
public interface FoodRepo extends JpaRepository<Food, Long> {

}
