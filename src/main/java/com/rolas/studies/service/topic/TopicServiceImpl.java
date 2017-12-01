package com.rolas.studies.service.topic;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import com.rolas.studies.dao.topic.TopicDao;
import com.rolas.studies.entities.Topic;
import com.rolas.studies.entities.User;
import com.rolas.studies.views.TopicVW;

public class TopicServiceImpl implements TopicService {

	@Inject
	TopicDao topicDao;

	@Override
	public Topic getTopic(Integer id) {
		return topicDao.get(id);
	}

	@Override
	public List<TopicVW> getByCategory(Integer categoryId) {
		return categoryId != null ?topicDao.getByCategory(categoryId) : null;
	}

	@Override
	public boolean delete(Integer id, User u) {
		if (u.getUserName().equals(topicDao.get(id).getUser().getUserName()) || u.isAdmin()) {
			return topicDao.delete(id);
		} else {
			return false;
		}
	}

	@Override
	public Topic insert(Topic topic) {
		if(topic == null) return null;
		topic.setInsertDate(new Date());
		topic.setPostCount(0);
		return topicDao.persist(topic);
	}

	@Override
	public boolean update(Topic topic) {
		Topic fromDatabase = (Topic) topicDao.get(topic.getId());
		if (fromDatabase != null) {
			fromDatabase.setDescription(topic.getDescription());
			fromDatabase.setName(topic.getName());
			fromDatabase.setAnswered(topic.isAnswered());
			fromDatabase.setUpdateDate(new Date());
			return topicDao.update(fromDatabase);
		}
		return false;
	}

	@Override
	public List<TopicVW> getAll() {
		return topicDao.getAll();
	}

}
