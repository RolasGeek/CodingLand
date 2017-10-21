package com.rolas.studies.service.user;

import java.util.HashMap;

import com.rolas.studies.entities.User;

public interface UserService {

	public HashMap<String, Object> login(String username, String password);
	public User getByName(String username);
	public Boolean update(User u);
	public Boolean insertNewUser(User u);
	public  HashMap<String, Object>  refresh(String rtoken);
}
