package com.wipro.food.service;

import java.util.List;

import com.wipro.food.entity.Food;

public interface FoodService {
	
	void save(Food food);
	List<Food> findAll();
	Food findById(Long id);
	void deleteById(Long id);
	Food updateFoodById(Long id, Food food);

}