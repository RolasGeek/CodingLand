package com.rolas.studies.dao.topic;

import java.util.List;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Topic;

public class TopicDaoImpl extends BaseDao<Topic> implements TopicDao{


	@Override
	public List<Topic> getAll() {
		return em.createNamedQuery("Topic.findAll", Topic.class).getResultList();
	}
	
	public Topic persist(Topic topic) {
		if(topic == null) return null;
		return ((Topic)super.persist(topic));
	}

	@Override
	public boolean delete(Integer id) {
		if(id == null) return false;
		try {
			Topic topic = em.find(Topic.class, id);
			em.getTransaction().begin();
			em.remove(topic);
			em.getTransaction().commit();
			return true;
		}catch (Exception e) {
			e.printStackTrace();//FIXME susikurti logery
			return false;
		}
	}

	@Override
	public List<Topic> getByCategory(Integer id) {
		if(id == null) return null;
		try {
			return em.createNamedQuery("Topic.findByCategory", Topic.class).setParameter("categoryId", id).getResultList();
		} catch (Exception e) {
			e.printStackTrace();//FIXME susikurti logery
			return null;
		}
	}

	@Override
	public Topic get(Integer id) {
		if(id == null) return null;
		return (Topic) super.get(id, Topic.class);
	}

}
