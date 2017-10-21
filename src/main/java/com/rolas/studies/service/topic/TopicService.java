package com.rolas.studies.service.topic;

import java.util.List;

import com.rolas.studies.entities.Topic;

public interface TopicService {

	public Topic getTopic(Integer id);
	public List<Topic> getByCategory(Integer categoryId);
	public boolean delete(Integer id);
	public Topic insert(Topic topic);
	public boolean update(Topic topic);
	
}
