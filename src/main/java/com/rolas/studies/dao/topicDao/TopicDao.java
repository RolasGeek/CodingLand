package com.rolas.studies.dao.topicDao;

import java.util.List;

import com.rolas.studies.entities.Topic;

public interface TopicDao {
	public List<Topic> getAll();
	public boolean delete(Integer id);
	public Integer persist(Topic topic);
	public boolean update(Object o);
	public Object get(Integer id);
	public Object getByCategory(Integer id);
}
