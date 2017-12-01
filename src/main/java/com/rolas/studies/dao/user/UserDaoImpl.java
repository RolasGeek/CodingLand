package com.rolas.studies.dao.user;

import java.util.List;
import javax.persistence.Query;

import com.rolas.studies.dao.BaseDao;
import com.rolas.studies.dto.UserDTO;
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
	public User get(Integer id) {
		return (User) super.get(id, User.class);
	}
	

	@Override
	public boolean delete(Integer id) {
			User user = em.find(User.class, id);
			if(user == null) return false;
			em.getTransaction().begin();
			em.remove(user);
			em.getTransaction().commit();
			return true;
	}

	@Override
	public boolean changePass(UserDTO u) {
		Query query = em.createNativeQuery("{call changePass(?,?,?)}")
				.setParameter(1, u.getUserName())
				.setParameter(2, u.getOldPassword())
				.setParameter(3, u.getPassword());          
		return  ((Integer) query.getSingleResult() == 1);
	}


}
