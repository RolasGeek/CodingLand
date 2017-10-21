package com.rolas.studies.service.category;

import java.util.List;

import javax.inject.Inject;

import com.rolas.studies.dao.category.CategoryDao;
import com.rolas.studies.entities.Category;

public class CategoryServiceImpl implements CategoryService {
	
	@Inject CategoryDao categoryDao;
	
	
	public List<Category> getAll() {
		return categoryDao.getAll();
	}


	@Override
	public Category insert(Category c) {
		return categoryDao.persist(c);
	}


	@Override
	public boolean update(Category c) {
		if(c.getId() != null) { 
			return  categoryDao.update(c);
		} 
		return false;
	}


	@Override
	public boolean delete(Integer id) {
		return categoryDao.delete(id);
	}
	

}
