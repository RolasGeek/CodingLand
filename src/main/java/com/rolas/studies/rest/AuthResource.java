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
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.core.Response.Status;

import com.rolas.studies.dao.user.UserDao;
import com.rolas.studies.entities.User;
import com.rolas.studies.security.Secured;
import com.rolas.studies.service.user.UserService;
import com.rolas.studies.util.KeyGeneratorUtils;
import com.rolas.studies.util.ResponseCreator;
import com.sun.research.ws.wadl.Application;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Path("auth")
public class AuthResource {

	@Inject UserService userService;
	
	@Inject ResponseCreator responseCreator;

	@Path("login")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(@QueryParam("username") String userName, @QueryParam("password") String password) {
		HashMap<String, Object> userData = userService.login(userName, password);
		return responseCreator.ResponseGet(userData);
	}
	
	
	@GET
	@Secured
	@PermitAll
	@Path("/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUser(@PathParam("username") String username ) {
		User u = userService.getByName(username);
		return responseCreator.ResponseGet(u);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(User u ) {
		return responseCreator.ResponseUpdate(userService.update(u));
	}
	
	

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response register(User u ) {
			return Response.ok(userService.insertNewUser(u) ? "1" : "2").build();
	}
	
	@Path("me") 
	@GET
	@Secured
	@PermitAll
	public Response me(@Context SecurityContext sc) {
		return responseCreator.ResponseGet(sc.getUserPrincipal());
	}
	
	
	@Path("refresh") 
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response refresh(@Context HttpHeaders httpheaders) {
		String rtoken = httpheaders.getHeaderString("refresh_token");
		return responseCreator.ResponseGet(userService.refresh(rtoken));
	}


}
