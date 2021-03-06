package com.rolas.studies.service.post;

import java.util.List;

import com.rolas.studies.entities.Post;
import com.rolas.studies.entities.User;

public interface PostService {
	
	public Post get(Integer id);
	public List<Post> getByTopic(Integer topicId);
	public Post insert(Post post);
	public boolean update(Post post);
	public boolean delete(Integer id, User u);
	public List<Post> getAll();

}
