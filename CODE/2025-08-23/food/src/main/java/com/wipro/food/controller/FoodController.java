package com.wipro.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.food.entity.Food;
import com.wipro.food.service.FoodService;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins = "http://localhost:4200") 
public class FoodController {
	
	@Autowired
	FoodService foodService;
	
	@PostMapping
	public void save(@RequestBody Food food) {
		foodService.save(food);
	}
	
	@GetMapping
	public List<Food> findAll(){
		return foodService.findAll();
	}
	
	@GetMapping("/{id}")
	public Food findById(@PathVariable Long id) {
		return foodService.findById(id);
	}
	
	@DeleteMapping("/{id}")
	void deleteById(@PathVariable Long id) {
		foodService.deleteById(id);
	}
	
	@PutMapping("/{id}")
	Food updateFoodById(@PathVariable Long id, @RequestBody Food food) {
		return foodService.updateFoodById(id, food);
	}

}
