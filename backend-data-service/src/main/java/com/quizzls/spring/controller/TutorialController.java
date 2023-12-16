package com.quizzls.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quizzls.spring.datajpa.model.Country;
import com.quizzls.spring.datajpa.repository.CountryRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TutorialController {

	@Autowired
	CountryRepository countryRepository;

	@GetMapping("/countries")
	public ResponseEntity<List<Country>> getAllCountries(@RequestParam(required = false) String title) {
		try {
			List<Country> countries = new ArrayList<Country>();
			countryRepository.findAll().forEach(countries::add);
			if (countries.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(countries, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/countries/{level}")
	public ResponseEntity<Country> getAllCountriesByLevel(@PathVariable("id") long id) {
		Optional<Country> countryData = countryRepository.findById(id);

		if (countryData.isPresent()) {
			return new ResponseEntity<>(countryData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/countries")
	public ResponseEntity<Country> createCountry(@RequestBody Country country) {
		try {
			Country _country = countryRepository
					.save(new Country(
						country.getName(), 
						country.getCapital(), 
						country.getCitizens(),
						country.getAreasquarekm(),
						country.getCitizenspersquarekm(),
						country.getFlag(),
						country.getFlagLevel(),
						country.getCapitalLevel(),
						country.getCapitalAnswers()));
			return new ResponseEntity<>(_country, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/countries/{id}")
	public ResponseEntity<Country> updateTutorial(@PathVariable("id") long id, @RequestBody Country country) {
		Optional<Country> countryData = countryRepository.findById(id);

		if (countryData.isPresent()) {
			Country _country = countryData.get();
			_country.setName(country.getName());
			_country.setCapital(country.getCapital());
			_country.setCitizens(country.getCitizens());
			_country.setAreasquarekm(country.getAreasquarekm());
			_country.setCitizenspersquarekm(country.getCitizenspersquarekm());
			_country.setFlag(country.getFlag());
			_country.setFlagLevel(country.getFlagLevel());
			_country.setCapitalLevel(country.getCapitalLevel());
			_country.setCapitalAnswers(country.getCapitalAnswers());
			return new ResponseEntity<>(countryRepository.save(_country), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/countries/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			countryRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/countries/{capitalLevel}")
	public ResponseEntity<List<Country>> findByCapitalLevel(@PathVariable("capitalLevel") int capitalLevel) {
		try {
			List<Country> countries = countryRepository.findByCapitalLevel(capitalLevel);

			if (countries.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(countries, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
