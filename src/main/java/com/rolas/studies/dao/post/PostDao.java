package com.rolas.studies.dao.post;

import java.util.List;

import com.rolas.studies.entities.Post;

public interface PostDao {
	public Post persist(Post post);
	public Post get(Integer id);
	public List<Post> getAll();
	public List<Post> getByTopicId(Integer topicId);
	public boolean delete(Integer id);
	public boolean update(Object o);
}
