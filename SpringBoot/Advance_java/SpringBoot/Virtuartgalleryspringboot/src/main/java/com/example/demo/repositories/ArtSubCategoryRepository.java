package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.ASubCategory;

@Transactional
@Repository
public interface ArtSubCategoryRepository extends JpaRepository<ASubCategory, Integer> {

	@Query(value = "SELECT * FROM art_sub_category WHERE acat_id = :cid", nativeQuery = true)
	public List<ASubCategory> findAllByCategoryId(int cid);

}
