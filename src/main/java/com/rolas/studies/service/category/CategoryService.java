package com.rolas.studies.service.category;

import java.util.List;

import com.rolas.studies.entities.Category;

public interface CategoryService {
	public List<Category> getAll();
	public Category insert(Category c);
	public boolean update(Category c);
	public boolean delete(Integer id);
	public Category get(Integer id);
}
