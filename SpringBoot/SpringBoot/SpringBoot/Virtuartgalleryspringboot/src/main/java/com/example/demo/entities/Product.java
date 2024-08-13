package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="product")
public class Product {
	
	@Id
	int p_id;
	String p_name ,description;
	float price;
	int  stock_quantity;
	byte[] product_img;

	@ManyToOne
	@JoinColumn(name ="psub_id")
	PsubCategory psub;
	
	@ManyToOne
	@JoinColumn(name ="b_id")
	Brand brand;
	
}
