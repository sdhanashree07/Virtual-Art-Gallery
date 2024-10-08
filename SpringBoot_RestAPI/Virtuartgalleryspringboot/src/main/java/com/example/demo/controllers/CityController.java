package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.services.CityService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CityController {

	@Autowired
	CityService cService;
	
	@GetMapping("/cities")
	public List<City> getAllCity() {
		return cService.getAllCity();
	}
		
}
