package com.rolas.studies.rest;

import java.security.Key;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.print.attribute.standard.Media;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.rolas.studies.dao.userDao.UserDao;
import com.rolas.studies.entities.User;
import com.rolas.studies.security.Secured;
import com.rolas.studies.util.KeyGenerator;
import com.rolas.studies.util.ObjectParser;
import com.sun.research.ws.wadl.Application;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Path("auth")
public class AuthResource {

	@Inject
	UserDao userDao;
	
	@Inject 
	KeyGenerator keyGenerator;
	
	@Inject ObjectParser objectParser;

	@Path("login")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(@QueryParam("username") String userName, @QueryParam("password") String password) {
		String token = "";
		Integer id  = userDao.login(userName, password);
		User u = (User) userDao.get(id);
		if(u != null) {
			HashMap<String, Object> loginData = new HashMap<>();
			token = issueToken(userName);
			loginData.put("token", token);
			loginData.put("username", u.getUserName());
			return Response.ok(loginData).build();
		} else {
			return Response.status(Response.Status.NO_CONTENT).build();
		}
		
	}
	
	
	@GET
	@Secured
	@PermitAll
	public Response getUser(@QueryParam("username")String userName) {
		return Response.ok(objectParser.mapToJson(userDao.getByName(userName))).build();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(String json) {
		User u = (User) objectParser.mapFromJson(json, User.class);
		if(u.getId() != null) {
			User dbUser = (User) userDao.get(u.getId());
			dbUser.setEmail(u.getEmail());
			dbUser.setFirstName(u.getFirstName());
			dbUser.setLastName(u.getLastName());
			dbUser.setRole(u.getRole());
			if(userDao.update(dbUser)) {
				return Response.status(Status.NO_CONTENT).build();
			}
		}
		return Response.status(Status.NOT_FOUND).build();
	}
	
	

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(String json) {
		User u = (User) objectParser.mapFromJson(json, User.class);
		if (userDao.insertNewUser(u)) {
			return Response.ok("1").build();
		} else {
			//FIXME check if exists
			return Response.ok("2").build();
		}
	}

	private String issueToken(String login) {
		Key key = keyGenerator.generateKey();
		String jwtToken = Jwts.builder().setSubject(login).setIssuer("codingLand").setIssuedAt(new Date())
				.setExpiration(toDate(LocalDateTime.now().plusMinutes(45L))).signWith(SignatureAlgorithm.HS512, key)
				.compact();

		return jwtToken;

	}

	private Date toDate(LocalDateTime localDateTime) {
		return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
	}

}
