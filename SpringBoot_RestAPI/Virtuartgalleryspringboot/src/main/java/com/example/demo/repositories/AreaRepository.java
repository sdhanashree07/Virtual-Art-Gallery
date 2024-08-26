package com.example.demo.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Area;

@Transactional
@Repository
public interface AreaRepository extends JpaRepository<Area, Integer> {

	@Query(value = "select * from area where city_id = :cityId",nativeQuery = true)
	public List<Area> findAreaByCityId(int cityId);



}
