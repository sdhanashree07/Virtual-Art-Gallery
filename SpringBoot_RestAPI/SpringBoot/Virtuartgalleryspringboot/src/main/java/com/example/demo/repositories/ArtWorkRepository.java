package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.ArtWork;

@Transactional
@Repository
public interface ArtWorkRepository extends JpaRepository<ArtWork, Integer> {

	@Modifying
	@Query("update ArtWork set art_photo = :photo where id = :aid")
	public int uploadPhoto(int aid, byte[] photo);

	@Query("SELECT a FROM ArtWork a ORDER BY a.amount ASC")
	public List<ArtWork> getArtworkLowToHighPrice();
	
	@Query("SELECT a FROM ArtWork a ORDER BY a.amount DESC")
	public List<ArtWork> getArtworkHighToLowPrice();

	

//
//	@Query("From ArtWork where sub_cat_id = :sub_cid")
//	public List<ArtWork> FindAllBySubCatId(int sub_cid);

}
