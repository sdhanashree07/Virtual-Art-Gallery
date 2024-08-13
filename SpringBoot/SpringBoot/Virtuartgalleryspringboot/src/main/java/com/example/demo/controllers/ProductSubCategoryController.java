package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PsubCategory;
import com.example.demo.services.ProductSubCategoryService;

@RestController
@RequestMapping("/pcategory")
public class ProductSubCategoryController {

	@Autowired
	ProductSubCategoryService psubCatservice;
	
	@GetMapping("/psubcategory")
	public List<PsubCategory> getAllPSubCategory (@RequestParam int sid){
			return psubCatservice.getPSubCategoryByCId(sid);
	}
	
//	@PostMapping("/")
//	public PsubCategory 
}
