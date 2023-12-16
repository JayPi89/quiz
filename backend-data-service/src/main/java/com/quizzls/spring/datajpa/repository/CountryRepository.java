package com.quizzls.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quizzls.spring.datajpa.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {
	Country findByName(String name);
	List<Country> findAll();

	List<Country> findByCapitalLevel(int level);
	List<Country> findByFlagLevel(int level);


}
