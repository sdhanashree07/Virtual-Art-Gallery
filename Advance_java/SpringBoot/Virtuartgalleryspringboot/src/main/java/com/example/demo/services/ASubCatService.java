package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.ASubCategory;
import com.example.demo.repositories.ASubCatRepository;

@Transactional
@Service
public class ASubCatService {
	
	@Autowired
	ASubCatRepository aSubcatRepo;
	
	public ASubCategory getById(int scid) {
		return aSubcatRepo.findById(scid).get();
	}

}
