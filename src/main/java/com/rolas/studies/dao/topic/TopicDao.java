package com.rolas.studies.dao.topic;

import java.util.List;

import com.rolas.studies.entities.Topic;

public interface TopicDao {
	public List<Topic> getAll();
	public boolean delete(Integer id);
	public Topic persist(Topic topic);
	public boolean update(Object o);
	public Topic get(Integer id);
	public List<Topic> getByCategory(Integer id);
}
