package com.rolas.studies.service.post;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.rolas.studies.dao.post.PostDao;
import com.rolas.studies.entities.Post;

public class PostServiceImpl implements PostService {

	@Inject PostDao postDao;
	
	
	@Override
	public Post get(Integer id) {
		return postDao.get(id);
	}

	@Override
	public List<Post> getByTopic(Integer topicId) {
		return postDao.getByTopicId(topicId);
	}

	@Override
	public Post insert(Post post) {
		post.setInsertDate(new Date());
		return postDao.persist(post);
	}

	@Override
	public boolean update(Post post) {
		if(post.getId() != null) {
			Post fromDb = postDao.get(post.getId());
			fromDb.setComment(post.getComment());
			fromDb.setSolution(post.getSolution());
			fromDb.setUpdateDate(new Date());
			return postDao.update(fromDb);
			}
		return false;
	}

	@Override
	public boolean delete(Integer id) {
		if(id == null) return false;
		return postDao.delete(id);
	}

}
