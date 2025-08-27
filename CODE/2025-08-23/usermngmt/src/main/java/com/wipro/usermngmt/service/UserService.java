package com.wipro.usermngmt.service;

import java.util.List;

import com.wipro.usermngmt.dto.Token;
import com.wipro.usermngmt.entity.User;

public interface UserService {
	List<User> findAll();
	User findById(int id);
	void save(User user);
	void deleteById(int id);
	Token login(User user);
}
