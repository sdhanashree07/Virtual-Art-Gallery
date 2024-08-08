package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "art_sub_category")
public class ASubCategory {

	@Id
	int sc_id;
	String sc_name , description;
	@ManyToOne
	@JoinColumn(name="acat_id")
	ArtCategory acat_id;
	public int getSc_id() {
		return sc_id;
	}
	public void setSc_id(int sc_id) {
		this.sc_id = sc_id;
	}
	public String getSc_name() {
		return sc_name;
	}
	public void setSc_name(String sc_name) {
		this.sc_name = sc_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public ArtCategory getAcat_id() {
		return acat_id;
	}
	public void setAcat_id(ArtCategory acat_id) {
		this.acat_id = acat_id;
	}
	
}
