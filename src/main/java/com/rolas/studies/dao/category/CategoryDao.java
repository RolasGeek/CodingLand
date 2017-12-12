package com.rolas.studies.dao.category;

import java.util.List;

import com.rolas.studies.entities.Category;
import com.rolas.studies.views.CategoryVW;

public interface CategoryDao {
	public List<CategoryVW> getAll();
	public Category persist(Category c);
	public Category get(Integer id);
	public boolean delete(Integer id);
	public boolean update(Object o);
}
