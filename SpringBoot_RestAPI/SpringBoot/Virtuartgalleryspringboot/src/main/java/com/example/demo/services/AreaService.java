package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.repositories.AreaRepository;

@Service
public class AreaService {

	@Autowired
	AreaRepository areaRepository;
	
	public List<Area> getAreasByCityId(int cityId) {
        return areaRepository.findAreaByCityId(cityId);
    }

}
