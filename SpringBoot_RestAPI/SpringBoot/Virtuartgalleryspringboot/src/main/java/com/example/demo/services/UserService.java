package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public List<User> getAllUsers() {
		return urepo.findAll();
	}
	
	public User getUserById(int uid) {
		return urepo.findById(uid).get();
	}
	
	public List<User> getUsersByRole(int roleId) {
        return urepo.findUsersByRoleId(roleId);
    }

	public int UpdateStatus(int userId,boolean status) {
		return urepo.changeStatus(userId,status);
	}
}
