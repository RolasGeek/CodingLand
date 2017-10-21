package com.rolas.studies.dao.user;

import java.util.List;

import com.rolas.studies.entities.User;

public interface UserDao {
	public List<User> getAll();
	public Object persist(Object o);
	public User getByName(String name);
	public boolean insertNewUser(User user);
	public Object get(Integer id);
	public Integer login(String username, String password);
	public boolean update(Object o);
}
