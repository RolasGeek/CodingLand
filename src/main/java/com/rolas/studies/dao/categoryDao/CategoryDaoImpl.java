package com.rolas.studies.dao.categoryDao;

import java.util.List;


import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Category;

public class CategoryDaoImpl extends BaseDao<Category> implements CategoryDao {
	
	
	@Override
	public List<Category> getAll() {
		return em.createNamedQuery("Category.findAll", Category.class).getResultList();
	}

	@Override
	public Object get(Integer id) {
		return super.get(id, Category.class);
	}

}
