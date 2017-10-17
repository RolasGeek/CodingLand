package com.rolas.studies.dao.categoryDao;

import java.util.List;

import com.rolas.studies.entities.Category;

public interface CategoryDao {
	public List<Category> getAll();
	public Object persist(Object o);
	public Object get(Integer id);
}
