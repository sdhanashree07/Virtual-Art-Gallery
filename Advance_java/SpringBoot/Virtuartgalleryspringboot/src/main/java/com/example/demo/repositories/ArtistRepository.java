package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artist;
import com.example.demo.entities.User;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, User> {

}
