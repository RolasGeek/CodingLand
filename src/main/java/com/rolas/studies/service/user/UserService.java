package com.rolas.studies.service.user;

import java.util.HashMap;
import java.util.List;

import com.rolas.studies.dto.UserDTO;
import com.rolas.studies.entities.User;

public interface UserService {

	public HashMap<String, Object> login(String username, String password);
	public User getByName(String username);
	public Boolean update(User u);
	public Boolean insertNewUser(User u);
	public  HashMap<String, Object>  refresh(String rtoken);
	public Boolean delete(Integer id);
	public List<User> getAll();
	public Boolean changePass(UserDTO u);
}
