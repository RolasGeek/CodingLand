package com.rolas.studies.views;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rolas.studies.entities.Category;
import com.rolas.studies.entities.User;

import java.util.Date;


/**
 * The persistent class for the TOPICS database table.
 * 
 */
@Entity
@Table(name="topics_vw")
@Cacheable(false)
@NamedQuery(name="TopicVW.findAll", query="SELECT t FROM TopicVW t")
@NamedQuery(name="TopicVW.findByCategory", query="SELECT t FROM TopicVW t join t.category c  where c.id=:categoryId")
@JsonIgnoreProperties({"category"})
public class TopicVW implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String description;

	@Column(name="is_answered")
	private boolean isAnswered;

	private String name;

	@JoinColumn(name="created_by")
	private User user;
	
	@JoinColumn(name="category_id")
	private Category category;

	@Column(name="insert_date")
	private Date insertDate;
	
	@Column(name="update_date")
	private Date updateDate;
	
	@Column(name="post_count")
	private Integer postCount;
 
	
	public TopicVW() {
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public boolean isAnswered() {
		return isAnswered;
	}


	public void setAnswered(boolean isAnswered) {
		this.isAnswered = isAnswered;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Date getInsertDate() {
		return insertDate;
	}


	public void setInsertDate(Date insertDate) {
		this.insertDate = insertDate;
	}


	public Date getUpdateDate() {
		return updateDate;
	}


	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}


	public Integer getPostCount() {
		return postCount;
	}


	public void setPostCount(Integer postCount) {
		this.postCount = postCount;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}

	

}