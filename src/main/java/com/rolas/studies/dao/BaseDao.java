package com.rolas.studies.dao;

import javax.inject.Inject;
import javax.persistence.EntityManager;

import com.rolas.studies.util.LogicLogger;

public class BaseDao<T> {
	@Inject
	public EntityManager em;
	
	private LogicLogger log =  LogicLogger.getLogger(getClass());
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
			log.error("UPDATE FAILED FOR CLASS" + getClass().getName(), e);
			return false;
		}
	}

	public Object get(Integer id, Class<T> type) {
		if (id != null) {
				return em.find(type, id);
		}
		return null;
	}
}