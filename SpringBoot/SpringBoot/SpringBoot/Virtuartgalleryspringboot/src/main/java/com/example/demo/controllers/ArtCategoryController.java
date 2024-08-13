package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ASubCategory;
import com.example.demo.entities.ArtCategory;
import com.example.demo.services.ArtCategoryService;
import com.example.demo.services.ArtSubCategoryService;

@RestController
@RequestMapping("/category")
public class ArtCategoryController {
	
	@Autowired
	ArtCategoryService artCategoryService;
	
	@GetMapping("/allcategories")
	public List<ArtCategory> getAllCategory(){
		return artCategoryService.getCategory();
	}
}
