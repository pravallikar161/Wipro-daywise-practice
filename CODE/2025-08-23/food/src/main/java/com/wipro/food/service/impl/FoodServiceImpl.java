package com.wipro.food.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.food.entity.Food;
import com.wipro.food.repo.FoodRepo;
import com.wipro.food.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService {

	@Autowired
	FoodRepo foodRepo;
	
	@Override
	public void save(Food food) {
		foodRepo.save(food);
	}

	@Override
	public List<Food> findAll() {
		return foodRepo.findAll();
	}

	@Override
	public Food findById(Long id) {
		return foodRepo.findById(id).orElseThrow();
	}

	@Override
	public void deleteById(Long id) {
		foodRepo.deleteById(id);
	}

	@Override
	public Food updateFoodById(Long id, Food food) {
		Food existingFood = findById(id);
		existingFood.setName(food.getName());
		existingFood.setImg(food.getImg());	
		existingFood.setPrice(food.getPrice());
		existingFood.setCategory(food.getCategory());
		return foodRepo.save(existingFood);
	}

}
