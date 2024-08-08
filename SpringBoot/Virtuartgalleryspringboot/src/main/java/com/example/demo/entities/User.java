package com.example.demo.entities;

import java.sql.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="role")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int  u_id ;
	@ManyToOne
	@JoinColumn(name ="area_id")
	Area area_id ;
	
	@ManyToOne
	@JoinColumn(name ="area_id")
	Role role_id;
	String first_name , last_name ,email_id ,contact ,username ,passward ,address ; 
	Blob profile_photo ;
	boolean status ;
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public Area getArea_id() {
		return area_id;
	}
	public void setArea_id(Area area_id) {
		this.area_id = area_id;
	}
	public Role getRole_id() {
		return role_id;
	}
	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassward() {
		return passward;
	}
	public void setPassward(String passward) {
		this.passward = passward;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Blob getProfile_photo() {
		return profile_photo;
	}
	public void setProfile_photo(Blob profile_photo) {
		this.profile_photo = profile_photo;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
