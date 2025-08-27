package com.wipro.usermngmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.usermngmt.dto.Token;
import com.wipro.usermngmt.entity.User;
import com.wipro.usermngmt.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userServie;
	
	@GetMapping
	List<User> findAll()
	{
		System.out.println("user-findAll--");
		return userServie.findAll();
	}
	
	
	@GetMapping("/{id}")
	User findById(@PathVariable int id)
	{
		return userServie.findById(id);
	}
	
	
	@DeleteMapping("/{id}")
	void deleteById(@PathVariable int id)
	{
		 userServie.deleteById(id);
	}
	
	
	@PostMapping
	void save(@RequestBody User user)
	{
		userServie.save(user);
		
	}
	
	@PutMapping
	void update(@RequestBody User user)
	{
		userServie.save(user);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<Token> login(@RequestBody User user) {
	    Token token = userServie.login(user);
	    if (token != null) {
	        return ResponseEntity.ok(token);
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	    }
	}


}
