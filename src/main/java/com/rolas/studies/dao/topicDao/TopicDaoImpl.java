package com.rolas.studies.dao.topicDao;

import java.util.List;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Topic;

public class TopicDaoImpl extends BaseDao<Topic> implements TopicDao{


	@Override
	public List<Topic> getAll() {
		return em.createNamedQuery("Topic.findAll", Topic.class).getResultList();
	}
	
	public Integer persist(Topic topic) {
		return ((Topic)super.persist(topic)).getId();
	}

	@Override
	public boolean delete(Integer id) {
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
		try {
			return em.createNamedQuery("Topic.findByCategory", Topic.class).setParameter("categoryId", id).getResultList();
		} catch (Exception e) {
			e.printStackTrace();//FIXME susikurti logery
			return null;
		}
	}

	@Override
	public Object get(Integer id) {
		return super.get(id, Topic.class);
	}

}
