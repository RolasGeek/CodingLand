package com.rolas.studies.service.topic;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.Response.Status;

import com.rolas.studies.dao.topic.TopicDao;
import com.rolas.studies.entities.Topic;

public class TopicServiceImpl implements TopicService {

	@Inject
	TopicDao topicDao;

	
	@Override
	public Topic getTopic(Integer id) {
		return topicDao.get(id);
	}
	
	@Override
	public List<Topic> getByCategory(Integer categoryId) {
		return topicDao.getByCategory(categoryId);
	}

	@Override
	public boolean delete(Integer id) {
		return topicDao.delete(id);
	}

	@Override
	public Topic insert(Topic topic) {
		topic.setInsertDate(new Date());
		topic.setPostCount(0);
		return topicDao.persist(topic);
	}

	@Override
	public boolean update(Topic topic) {
		Topic fromDatabase = (Topic) topicDao.get(topic.getId());
		fromDatabase.setDescription(topic.getDescription());
		fromDatabase.setName(topic.getName());
		fromDatabase.setAnswered(topic.isAnswered());
		return topicDao.update(fromDatabase);
	}
	
	
}
