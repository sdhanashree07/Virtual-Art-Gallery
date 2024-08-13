package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ASubCategory;
import com.example.demo.services.ArtSubCategoryService;

@RestController
@RequestMapping("/category")
public class ArtSubCategoryController {

	@Autowired
	ArtSubCategoryService artSubCategoryService;
	
	@GetMapping("/subCategories")
	public List<ASubCategory> getAllCategories(){
		return artSubCategoryService.getSubCategory();
	}
	
	 @GetMapping("/subcategory")
	    public List<ASubCategory> getAllSubCategory(@RequestParam int cid) {
	        return artSubCategoryService.getSubCategoryByCategoryId(cid);
	    }
}
