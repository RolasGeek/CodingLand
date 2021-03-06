package com.rolas.studies.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the CATEGORIES database table.
 * 
 */
@Entity
@Table(name="CATEGORIES")
@NamedQuery(name="Category.findAll", query="SELECT c FROM Category c")
@JsonIgnoreProperties({"topics"})
public class Category implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;

	private String description;

	private String name;

	@Column(name="object_code")
	private String objectCode;

	
	@OneToMany(mappedBy="category")
	@JsonManagedReference
	private List<Topic> topics;

	public Category() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Object getDescription() {
		return this.description;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getObjectCode() {
		return objectCode;
	}

	public void setObjectCode(String objectCode) {
		this.objectCode = objectCode;
	}

	public void setDescription(String description) {
		this.description = description;
	}


}