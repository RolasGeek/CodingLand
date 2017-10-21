package com.rolas.studies.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;


/**
 * The persistent class for the POSTS database table.
 * 
 */
@Entity
@Table(name="POSTS")
@NamedQuery(name="Post.findAll", query="SELECT p FROM Post p")
@NamedQuery(name="Post.findByTopic", query="SELECT p FROM Post p join p.topic t  where t.id=:topicId")
@JsonIgnoreProperties("topic")
public class Post implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;

	private String comment;

	@Column(name="is_correct")
	private boolean isCorrect;

	private String solution;

	//bi-directional many-to-one association to Topic
	@ManyToOne
	@JoinColumn(name="topic_id")
	@JsonIgnore
	private Topic topic;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@Column(name="insert_date")
	private Date insertDate;
	
	@Column(name="update_date")
	private Date updateDate;

	public Post() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getComment() {
		return this.comment;
	}

	

	public boolean isCorrect() {
		return isCorrect;
	}

	public void setCorrect(boolean isCorrect) {
		this.isCorrect = isCorrect;
	}
	@JsonProperty("solution")
	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Topic getTopic() {
		return this.topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
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

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	
	//Custom setters
	
	public void setUserId(Integer id) {
		User u = new  User();
		u.setId(id);
		this.setUser(u);
	}
	
	public void setTopicId(Integer id) {
		Topic t = new Topic();
		t.setId(id);
		this.setTopic(t);
	}

}