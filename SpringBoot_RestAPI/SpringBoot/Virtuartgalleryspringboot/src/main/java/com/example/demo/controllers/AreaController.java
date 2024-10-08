package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.services.AreaService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AreaController {

	@Autowired
	AreaService areaService;
	
	 @GetMapping("/areas")
	    public List<Area> getAreasByCityId(@RequestParam int cityId) {
	        return areaService.getAreasByCityId(cityId);
	    }
}
