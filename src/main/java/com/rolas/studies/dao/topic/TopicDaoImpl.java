package com.rolas.studies.dao.topic;

import java.util.List;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Topic;
import com.rolas.studies.views.TopicVW;

public class TopicDaoImpl extends BaseDao<Topic> implements TopicDao {

	@Override
	public List<TopicVW> getAll() {
		return em.createNamedQuery("TopicVW.findAll", TopicVW.class).getResultList();
	}

	public Topic persist(Topic topic) {
		return ((Topic) super.persist(topic));
	}

	@Override
	public boolean delete(Integer id) {
		Topic topic = em.find(Topic.class, id);
		if (topic == null)
			return false;
		em.getTransaction().begin();
		em.remove(topic);
		em.getTransaction().commit();
		return true;
	}

	@Override
	public List<TopicVW> getByCategory(Integer id) {
		return em.createNamedQuery("TopicVW.findByCategory", TopicVW.class).setParameter("categoryId", id).getResultList();
	}

	@Override
	public Topic get(Integer id) {
		return (Topic) super.get(id, Topic.class);
	}

}
