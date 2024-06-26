package com.farmer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.farmer.model.Farmer;
import java.util.List;
import com.farmer.model.Crop;



@Repository
public interface FarmerRepository extends MongoRepository<Farmer, String> {
	
	Farmer findByEmail(String email);
	
}
