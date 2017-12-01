package com.rolas.studies.service.topic;

import java.util.List;

import com.rolas.studies.entities.Topic;
import com.rolas.studies.entities.User;
import com.rolas.studies.views.TopicVW;

public interface TopicService {

	public Topic getTopic(Integer id);
	public List<TopicVW> getByCategory(Integer categoryId);
	public boolean delete(Integer id, User u);
	public Topic insert(Topic topic);
	public boolean update(Topic topic);
	public List<TopicVW> getAll();
}
