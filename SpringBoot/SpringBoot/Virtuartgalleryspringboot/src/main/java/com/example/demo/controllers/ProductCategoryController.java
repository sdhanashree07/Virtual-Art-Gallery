package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.ProductCategory;
import com.example.demo.services.ProductCategoryService;

@RestController
@RequestMapping("/pcategory")
public class ProductCategoryController {

	@Autowired
	ProductCategoryService pcservice;
	
	@GetMapping("/allproductcategory")
	public List<ProductCategory> getAllPCategory(){
		
		return pcservice.getPCategory();
		}
}
