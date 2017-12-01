package com.rolas.studies.dao.topic;

import java.util.List;

import com.rolas.studies.entities.Topic;
import com.rolas.studies.views.TopicVW;

public interface TopicDao {
	public List<TopicVW> getAll();
	public boolean delete(Integer id);
	public Topic persist(Topic topic);
	public boolean update(Object o);
	public Topic get(Integer id);
	public List<TopicVW> getByCategory(Integer id);
}
