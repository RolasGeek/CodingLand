package com.rolas.studies.dao.user;

import java.util.List;

import com.rolas.studies.dto.UserDTO;
import com.rolas.studies.entities.User;

public interface UserDao {
	public List<User> getAll();
	public Object persist(Object o);
	public User getByName(String name);
	public Integer insertNewUser(User user);
	public User get(Integer id);
	public Integer login(String username, String password);
	public boolean update(Object o);
	public boolean delete(Integer id);
	public boolean changePass(UserDTO u);
}
