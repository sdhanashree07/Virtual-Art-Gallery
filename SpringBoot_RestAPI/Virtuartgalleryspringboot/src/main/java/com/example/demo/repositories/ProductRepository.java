package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Product;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	
	@Modifying
	@Query("update Product set product_img = :photo where p_id = :pid")
	public int uploadPhoto(int pid, byte[] photo);

}
