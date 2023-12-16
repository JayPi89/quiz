package com.quizzls.spring.datajpa.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "capital_answers")
public class CapitalAnswer {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JoinColumn(name = "city")
	private String city;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "country_id")
	private Country country;

	public CapitalAnswer() {

	}

	public CapitalAnswer(String city) {
		this.city = city;
	}


	public long getId() {
		return id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country city) {
		this.country = country;
	}
    
}
