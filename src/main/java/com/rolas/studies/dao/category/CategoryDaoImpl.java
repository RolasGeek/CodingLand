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
		if (c == null) return null;
		return (Category) super.persist(c);
	}

	@Override
	public boolean delete(Integer id) {
		if(id == null) return false;
		Category c = this.get(id);
		try {
			em.getTransaction().begin();
			em.remove(c);
			em.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean update(Category c) {
		if(c == null) return false;
		return super.update(c);
	}

}
