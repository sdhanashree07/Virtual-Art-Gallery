package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="artwork")
public class ArtWork {
	@Id
	int art_id ;
	int amount;
	String art_name ,description ,dimension ;
	float weight ;
	@ManyToOne
	Artist artist_id ;
	@ManyToOne
	ASubCategory sub_cat_id;
	public int getArt_id() {
		return art_id;
	}
	public void setArt_id(int art_id) {
		this.art_id = art_id;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getArt_name() {
		return art_name;
	}
	public void setArt_name(String art_name) {
		this.art_name = art_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDimension() {
		return dimension;
	}
	public void setDimension(String dimension) {
		this.dimension = dimension;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public Artist getArtist_id() {
		return artist_id;
	}
	public void setArtist_id(Artist artist_id) {
		this.artist_id = artist_id;
	}
	public ASubCategory getSub_cat_id() {
		return sub_cat_id;
	}
	public void setSub_cat_id(ASubCategory sub_cat_id) {
		this.sub_cat_id = sub_cat_id;
	}
	
}
