package com.rolas.studies.service.post;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import com.rolas.studies.dao.post.PostDao;
import com.rolas.studies.dao.user.UserDao;
import com.rolas.studies.entities.Post;
import com.rolas.studies.entities.User;

public class PostServiceImpl implements PostService {

	@Inject PostDao postDao;
	@Inject UserDao userDao;
	
	@Override
	public Post get(Integer id) {
		return postDao.get(id);
	}

	@Override
	public List<Post> getByTopic(Integer topicId) {
		if(topicId == null) return null;
		return postDao.getByTopicId(topicId);
	}

	@Override
	public Post insert(Post post) {
		post.setInsertDate(new Date());
		post.setUser(userDao.get(post.getUser().getId()));
		return postDao.persist(post);
	}

	@Override
	public boolean update(Post post) {
		if(post.getId() != null) {
			Post fromDb = postDao.get(post.getId());
			fromDb.setComment(post.getComment());
			fromDb.setSolution(post.getSolution());
			fromDb.setUpdateDate(new Date());
			fromDb.setIsCorrect(post.getIsCorrect());
			return postDao.update(fromDb);
			}
		return false;
	}

	@Override
	public boolean delete(Integer id, User u) {
		if (u.getUserName().equals(postDao.get(id).getUser().getUserName()) || u.isAdmin()) {
			return postDao.delete(id);
		} else {
			return false;
		}
	}

	@Override
	public List<Post> getAll() {
		return postDao.getAll();
	}

}
