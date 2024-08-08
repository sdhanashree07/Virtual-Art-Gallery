package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="art_category")
public class ArtCategory {
	@Id
	int acat_id;
	String acat_name , description;
	public int getAcat_id() {
		return acat_id;
	}
	public void setAcat_id(int acat_id) {
		this.acat_id = acat_id;
	}
	public String getAcat_name() {
		return acat_name;
	}
	public void setAcat_name(String acat_name) {
		this.acat_name = acat_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
