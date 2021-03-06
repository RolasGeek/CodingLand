package com.rolas.studies.service.category;

import java.util.List;

import javax.inject.Inject;

import com.rolas.studies.dao.category.CategoryDao;
import com.rolas.studies.entities.Category;
import com.rolas.studies.views.CategoryVW;

public class CategoryServiceImpl implements CategoryService {
	
	@Inject CategoryDao categoryDao;
	
	
	public List<CategoryVW> getAll() {
		return categoryDao.getAll();
	}


	@Override
	public Category insert(Category c) {
		if (c == null) return null;
		return categoryDao.persist(c);
	}


	@Override
	public boolean update(Category c) {
		if(c.getId() == null) return false; 
		return  categoryDao.update(c);
	}


	@Override
	public boolean delete(Integer id) {
		return categoryDao.delete(id);
	}
	
	
	@Override
	public Category get(Integer id) {
		return categoryDao.get(id);
	}

}
