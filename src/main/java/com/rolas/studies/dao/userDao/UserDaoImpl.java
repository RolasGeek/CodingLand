package com.rolas.studies.dao.userDao;

import java.util.List;
import javax.persistence.Query;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.entities.User;

public class UserDaoImpl extends BaseDao<User> implements UserDao {

	
	
	@Override
	public List<User> getAll() {
		return em.createNamedQuery("User.findAll", User.class).getResultList();
	}

	@Override
	public User getByName(String name) {
		
		Query q = em.createQuery("Select u from User u where u.userName=?1", User.class);
		q.setParameter(1, name);
		return (User) q.getSingleResult();
	}
	
	@Override
	public boolean insertNewUser(User user) {
		Query query = em.createNativeQuery("{call insertNewUser(?,?,?,?,?,?,?)}")           
                .setParameter(1, user.getUserName())
                .setParameter(2, user.getPassword())
                .setParameter(3, user.getFirstName())
                .setParameter(4, user.getLastName())
                .setParameter(5, user.getEmail())
                .setParameter(6, "USER")
                .setParameter(7, null);
		return ((Integer) query.getSingleResult() == 1);
	}

	@Override
	public Integer login(String username, String password) {
		Query query = em.createNativeQuery("{call userlogin(?,?)}")
				.setParameter(1, username)
                .setParameter(2, password);
		return ((Integer) query.getSingleResult());
	}

	@Override
	public Object get(Integer id) {
		return super.get(id, User.class);
	}


}
