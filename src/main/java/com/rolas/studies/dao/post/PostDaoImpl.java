package com.rolas.studies.dao.post;

import java.util.List;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Post;

public class PostDaoImpl extends BaseDao<Post> implements PostDao {

	@Override
	public Post get(Integer id) {
		return (Post) super.get(id, Post.class);
	}
	
	
	
	@Override
	public List<Post> getAll() {
		return em.createNamedQuery("Post.findAll", Post.class).getResultList();
	}



	@Override
	public Post persist(Post post) {
		return ((Post)super.persist(post));
	}



	@Override
	public List<Post> getByTopicId(Integer topicId) {
		return em.createNamedQuery("Post.findByTopic", Post.class).setParameter("topicId", topicId).getResultList();
	}



	@Override
	public boolean delete(Integer id) {
		Post post = em.find(Post.class, id);
		if(post == null) return false;
		em.getTransaction().begin();
		em.remove(post);
		em.getTransaction().commit();
		return true;
	}

}
