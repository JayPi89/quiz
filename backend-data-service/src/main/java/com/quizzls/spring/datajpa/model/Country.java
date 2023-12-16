package com.quizzls.spring.datajpa.model;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "countries")
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "capital")
	private String capital;

	@Column(name = "citizens")
	private int citizens;

	@Column(name = "areasquarekm")
	private float areasquarekm;

	@Column(name = "citizenspersquarekm")
	private float citizenspersquarekm;

	@Column(name = "flag")
	private String flag;

	@Column(name = "flag_level")
	private int flagLevel;

	@Column(name = "capital_level")
	private int capitalLevel;

	@JsonBackReference
	@OneToMany(mappedBy = "country")
	private List<CapitalAnswer> capitalAnswers;

	public Country() {

	}

	public Country(String name, String capital, int citizens, float areasquarekm, 
					float citizenspersquarekm, String flag, int flagLevel, int capitalLevel, List<CapitalAnswer> capitalAnswers) {
		this.name = name;
		this.capital = capital;
		this.citizens = citizens;
		this.areasquarekm = areasquarekm;
		this.citizenspersquarekm = citizenspersquarekm;
		this.flag = flag;
		this.flagLevel = flagLevel;
		this.capitalLevel = capitalLevel;
		this.capitalAnswers = capitalAnswers;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCapital() {
		return capital;
	}

	public void setCapital(String capital) {
		this.capital = capital;
	}

	public int getCitizens() {
		return citizens;
	}

	public void setCitizens(int citizens) {
		this.citizens = citizens;
	}

	public float getAreasquarekm() {
		return areasquarekm;
	}

	public void setAreasquarekm(float areasquarekm) {
		this.areasquarekm = areasquarekm;
	}

	public float getCitizenspersquarekm() {
		return citizenspersquarekm;
	}

	public void setCitizenspersquarekm(float citizenspersquarekm) {
		this.citizenspersquarekm = citizenspersquarekm;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public int getFlagLevel() {
		return flagLevel;
	}

	public void setFlagLevel(int flagLevel) {
		this.flagLevel = flagLevel;
	}

	public int getCapitalLevel() {
		return capitalLevel;
	}

	public void setCapitalLevel(int capitalLevel) {
		this.capitalLevel = capitalLevel;
	}

	public List<CapitalAnswer> getCapitalAnswers() {
		return capitalAnswers;
	}

	public void setCapitalAnswers(List<CapitalAnswer> capitalAnswers) {
		this.capitalAnswers = capitalAnswers;
	}

	public void addCapitalAnswer(CapitalAnswer capitalAnswer) {
		capitalAnswer.setCountry(this);
		capitalAnswers.add(capitalAnswer);
	}
	public void removeCapitalAnswer(long id) {
		capitalAnswers = capitalAnswers.stream()
					.filter(capitalAnswer -> capitalAnswer.getId() != id)
					.collect(Collectors.toList());	
	}

	@Override
	public String toString() {
		return "Country [id=" + id + ",name=" + name + ",capital=" + capital + ",citizens=" + citizens + ",areasquarekm=" + areasquarekm + ",citizenspersquarekm=" + citizenspersquarekm + ",flag=" + flag + ",flagLevel=" + flagLevel + ",capitalLevel=" + capitalLevel + ",capitalAnswers=" + capitalAnswers + "]";
	}

}
