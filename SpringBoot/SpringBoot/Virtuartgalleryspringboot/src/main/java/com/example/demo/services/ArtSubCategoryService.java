package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ASubCategory;
import com.example.demo.repositories.ArtSubCategoryRepository;

@Service
public class ArtSubCategoryService {
	
	@Autowired
	ArtSubCategoryRepository artSubCategoryRepository;

	public List<ASubCategory> getSubCategory() {
		return artSubCategoryRepository.findAll();
	}

	public  List<ASubCategory> getSubCategoryByCategoryId(int scid) {
		return artSubCategoryRepository.findAllByCategoryId(scid) ;
	}
	
	public ASubCategory getById(int scid) {
		return artSubCategoryRepository.findById(scid).get();
	}
	
}
