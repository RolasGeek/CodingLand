package com.rolas.studies.entities;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the TOPICS database table.
 * 
 */
@Entity
@Table(name="TOPICS")
@NamedQuery(name="Topic.findAll", query="SELECT t FROM Topic t")
@NamedQuery(name="Topic.findByCategory", query="SELECT t FROM Topic t join t.category c  where c.id=:categoryId")
@JsonIgnoreProperties({"category", "posts"})
public class Topic implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String description;

	@Column(name="is_answered")
	private boolean isAnswered;

	private String name;

	//bi-directional many-to-one association to Category
	@ManyToOne
	@JoinColumn(name="category_id")
	private Category category;

	//bi-directional many-to-one association to Post
	
	@OneToMany(mappedBy="topic", cascade=CascadeType.REMOVE)
	private List<Post> posts;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="created_by")
	private User user;
	

	@Column(name="insert_date")
	private Date insertDate;
	
	@Column(name="update_date")
	private Date updateDate;
	
	@Column(name="post_count")
	private Integer postCount;
 
	
	public Topic() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
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
	
	public void setCategoryId(Integer categoryId) {
		Category category = new Category();
		category.setId(categoryId);
		this.setCategory(category);
	}
	
	public void setCreatedBy(Integer createdBy) {
		User u = new User();
		u.setId(createdBy);
		this.setUser(u);
	}

	public void setDescription(String description) {
		this.description = description;
	}
	

	public void setCategory(Category category) {
		this.category = category;
	}

	
	public User getUser() {
		return this.user;
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


	public Integer getPostCount() {
		return postCount;
	}

	public void setPostCount(Integer postCount) {
		this.postCount = postCount;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

}