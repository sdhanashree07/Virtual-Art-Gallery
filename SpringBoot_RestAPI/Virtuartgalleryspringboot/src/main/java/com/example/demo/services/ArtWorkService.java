package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ArtWork;
import com.example.demo.repositories.ArtWorkRepository;

@Service
public class ArtWorkService {

	@Autowired
	ArtWorkRepository artworkRepo;

	public ArtWork uploadArtWork(ArtWork aw) {
		return artworkRepo.save(aw);
	}
	
	
	public boolean upload(int aid, byte[] photo) {
		if(artworkRepo.uploadPhoto(aid,photo)==1) {
			return true;
		}
		else {
		return false;
		}
	}

	public ArtWork getArtworkById(int artworkId) {
		return artworkRepo.findById(artworkId).get();
	}

	public List<ArtWork> getArtworkLowToHighPrice() {
		return artworkRepo.getArtworkLowToHighPrice();
	}
	
	public List<ArtWork> getArtworkHighToLowPrice() {
		return artworkRepo.getArtworkHighToLowPrice();
	}

	public void deleteArt(int art_id) {
		artworkRepo.deleteById(art_id);
	}

	public List<ArtWork> getAllArtwork() {
		return artworkRepo.findAll();
	}


//	public List<ArtWork> findBySubcategory(int sub_cid) {
//		// TODO Auto-generated method stub
//		return artworkRepo.FindAllBySubCatId(sub_cid);
//	}



	
}
