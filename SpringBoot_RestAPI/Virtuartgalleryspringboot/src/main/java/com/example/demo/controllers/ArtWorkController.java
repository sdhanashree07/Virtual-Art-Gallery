package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.ArtSubCategory;
import com.example.demo.entities.ArtWork;
import com.example.demo.entities.Artist;
import com.example.demo.entities.DummyArtWork;
import com.example.demo.entities.User;
import com.example.demo.services.ArtSubCategoryService;
import com.example.demo.services.ArtWorkService;
import com.example.demo.services.ArtistService;
@RestController
@RequestMapping("/artwork")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtWorkController {
	
	@Autowired
	ArtWorkService artworkService;
	
	@Autowired
	ArtistService artistService;
	
	@Autowired
	ArtSubCategoryService artSubCategoryService;
	
	@GetMapping("artworkbyid")
	public ArtWork getArtworkById(@RequestParam int artid) {
		return artworkService.getArtworkById(artid);
	}
	
//	@GetMapping("artbySubcatid")
//	public List<ArtWork> getArtBySubCatId(@RequestParam int sub_cid) {
//		return artworkService.findBySubcategory(sub_cid);
//	}
	
	
	@GetMapping("/allartwork")
	public List<ArtWork> getAllArtwork(){
		return artworkService.getAllArtwork();
	}
	
	@GetMapping("/lowtohigh")
	public List<ArtWork> getArtworkLowToHighPrice(){
		return artworkService.getArtworkLowToHighPrice();
	}
	
	@GetMapping("/hightolow")
	public List<ArtWork> getArtworkHighToLowPrice(){
		return artworkService.getArtworkHighToLowPrice();
	}
	
	@PostMapping("/uploadartwork")
	public ArtWork uploadArtWork(@RequestBody DummyArtWork artwork){
		
		int u_id = artwork.getU_id();
		Artist a = artistService.getArtistById(u_id);
		
		int sc_id = artwork.getSub_cat_id();
		ArtSubCategory subcat = artSubCategoryService.getById(sc_id);
		
		ArtWork aw = new ArtWork();
		aw.setAmount(artwork.getAmount());
		aw.setArt_name(artwork.getArt_name());
		aw.setDescription(artwork.getDescription());
		aw.setDimension(artwork.getDimension());
		aw.setWeight(artwork.getWeight());
		aw.setSubcat(subcat);
		aw.setArtist(a);
		
		return artworkService.uploadArtWork(aw);
	}
	
	@PostMapping(value="/uploadartimage/{aid}",consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable("aid") int aid,@RequestBody MultipartFile file) {
		boolean flag = true;
		try
		{
			flag = artworkService.upload(aid, file.getBytes());
		}
		catch(Exception e)
		{
			flag = false;
		}
		
		return flag;
	}
	
	@DeleteMapping("/deleteartWork")
	public void deleteArtwork(@RequestParam("art_id") int art_id) {
		artworkService.deleteArt(art_id);
	}
	
	
	
}
