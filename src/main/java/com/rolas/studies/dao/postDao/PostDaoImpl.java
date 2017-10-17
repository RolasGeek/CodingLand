package com.rolas.studies.dao.postDao;

import java.util.List;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Post;
import com.rolas.studies.entities.Topic;

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
	public Integer persist(Post post) {
		return ((Post)super.persist(post)).getId();
	}



	@Override
	public List<Post> getByTopicId(Integer topicId) {
		return em.createNamedQuery("Post.findByTopic", Post.class).setParameter("topicId", topicId).getResultList();
	}



	@Override
	public boolean delete(Integer id) {
		Post post = em.find(Post.class, id);
		try {
			em.getTransaction().begin();
			em.remove(post);
			em.getTransaction().commit();
			return true;
		} catch (Exception e) {
			//TODO Sukurti loggery
			return false;
		}
	}

}
