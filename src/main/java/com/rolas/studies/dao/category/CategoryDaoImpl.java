package com.rolas.studies.dao.category;

import java.util.List;


import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.Category;

public class CategoryDaoImpl extends BaseDao<Category> implements CategoryDao {
	
	
	@Override
	public List<Category> getAll() {
		return em.createNamedQuery("Category.findAll", Category.class).getResultList();
	}

	@Override
	public Category get(Integer id) {
		return (Category) super.get(id, Category.class);
	}

	@Override
	public Category persist(Category c) {
		return (Category) super.persist(c);
	}

	@Override
	public boolean delete(Integer id) {
		Category c = this.get(id);
		if(c == null) return false;
		em.getTransaction().begin();
		em.remove(c);
		em.getTransaction().commit();
		return true;
	}

}
