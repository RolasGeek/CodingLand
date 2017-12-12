package com.rolas.studies.service.user;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;

import com.rolas.studies.dao.user.UserDao;
import com.rolas.studies.dto.UserDTO;
import com.rolas.studies.entities.User;
import com.rolas.studies.util.JwtTokenUtils;

import io.jsonwebtoken.Claims;

public class UserServiceImpl  implements UserService {
	
	
	@Inject
	UserDao userDao;
	
	@Inject JwtTokenUtils jwtToken;
	
	


	@Override
	public HashMap<String, Object> login(String username, String password) {
		Integer id  = userDao.login(username, password);
		User u = (User) userDao.get(id);
		if(u != null) {
			HashMap<String, Object> loginData = new HashMap<>();
			Date expDate = jwtToken.toDate(LocalDateTime.now().plusMinutes(45L)); //Token expiration time for 45mins
			Date rExpDate = jwtToken.toDate(LocalDateTime.now().plusYears(2)); //Refresh token expiration time for 2 years
			loginData.put("token", jwtToken.issueToken(username,expDate, false));
			loginData.put("expirationDate", expDate);
			loginData.put("refresh_token",  jwtToken.issueToken(username,rExpDate, true));
			return loginData;
		}
		return null;
	}
	
	
	
	public User getByName(String username) {
		return userDao.getByName(username);
	}
	
	public Boolean update(User u) {
		if(u.getId() != null) {
			User dbUser = (User) userDao.get(u.getId());
			if(dbUser == null) return false;
			dbUser.setEmail(u.getEmail());
			dbUser.setFirstName(u.getFirstName());
			dbUser.setLastName(u.getLastName());
			return userDao.update(dbUser);
		}
		return false;
	}
	
	public Integer insertNewUser(User u) {
		return userDao.insertNewUser(u);
	}



	@Override
	public HashMap<String, Object> refresh(String rtoken) {
		Claims claims = jwtToken.validateRefresh(rtoken);
		if(claims != null) {
			String username = claims.getSubject();
			HashMap<String, Object> loginData = new HashMap<>();
			Date expDate = jwtToken.toDate(LocalDateTime.now().plusMinutes(45L)); //Token expiration time for 45mins
			loginData.put("token", jwtToken.issueToken(username,expDate, false));
			loginData.put("expirationDate", expDate);
			loginData.put("refresh_token",  rtoken);
			return loginData;
		}
		return null;
	}



	@Override
	public Boolean delete(Integer id) {
		return userDao.delete(id);
	}



	@Override
	public List<User> getAll() {
		return userDao.getAll();
	}
	
	public Boolean changePass(UserDTO u) {
		if(u.getUserName() == null || !u.getPassword().equals(u.getrPassword())) return false;
		return userDao.changePass(u);
	}

	
	
	
	
	
}
