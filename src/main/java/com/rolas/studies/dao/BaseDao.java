package com.rolas.studies.dao;

import javax.inject.Inject;
import javax.persistence.EntityManager;

public class BaseDao<T> {
	@Inject
	public EntityManager em;

	public Object persist(Object o) {
		try {
			em.getTransaction().begin();
			em.persist(o);
			em.flush();
			em.getTransaction().commit();
			return o;
		} catch (Exception e) {
			e.printStackTrace();// FIXME sukurti logery
			return null;
		}
	}

	public boolean update(Object o) {
		try {
			em.getTransaction().begin();
			em.merge(o);
			em.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();// FIXME sukurti logery
			return false;
		}
	}

	public Object get(Integer id, Class<T> type) {
		if (id != null) {
			try {
				return em.find(type, id);
			} catch (Exception e) {
				e.printStackTrace();// TODO: handle exception
			}
		}
		return null;
	}
}