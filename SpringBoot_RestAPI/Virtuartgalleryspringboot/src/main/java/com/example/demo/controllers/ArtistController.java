package com.example.demo.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.ArtistService;

@RestController
@RequestMapping("/artist")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtistController {

	@Autowired
	ArtistService artistService;
	
	
}
