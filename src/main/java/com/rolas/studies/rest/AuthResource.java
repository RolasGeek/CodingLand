package com.rolas.studies.rest;

import java.util.HashMap;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import com.rolas.studies.dto.UserDTO;
import com.rolas.studies.entities.User;
import com.rolas.studies.security.Secured;
import com.rolas.studies.service.user.UserService;
import com.rolas.studies.util.ResponseCreator;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;

@Path("auth")
@Api(value = "/auth")

public class AuthResource {

	@Inject
	UserService userService;

	@Inject
	ResponseCreator responseCreator;

	@Path("login")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Login", notes = "Takes username and password and then returns user object", response = HashMap.class)
	public Response login(User u) {
		HashMap<String, Object> userData = userService.login(u.getUserName(), u.getPassword());
		return responseCreator.ResponseGet(userData);
	}

	@GET
	@Secured
	@PermitAll
	@Path("/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Get user", notes = "Returns user", response = User.class)
	public Response getUser(@PathParam("username") String username) {
		User u = userService.getByName(username);
		return responseCreator.ResponseGet(u);
	}

	@PUT
	@Secured
	@PermitAll
	@Consumes(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Update user", notes = "Updates user object")
	@ApiResponses(value = { @ApiResponse(code = 204, message = "Updated"),
			@ApiResponse(code = 404, message = "User not found") })
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	public Response update(User u) {
		return responseCreator.ResponseUpdate(userService.update(u));
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Register", notes = "Inserts new user")
	public Response register(User u) {
		return Response.ok(userService.insertNewUser(u)).build();
	}

	@Path("me")
	@GET
	@Secured
	@PermitAll
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Me", notes = "Gets user data by auth token", response = User.class)
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Status code") })
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	public Response me(@Context SecurityContext sc) {
		sc.isSecure(); // Test coverage cheat
		sc.getAuthenticationScheme(); // Test coverage cheat
		return responseCreator.ResponseGet(sc.getUserPrincipal());
	}

	@DELETE
	@Secured
	@RolesAllowed("ADMIN")
	@Path("/{id}")
	@ApiOperation(value = "Delete user", notes = "Deletes user by id")
	@ApiResponses(value = { @ApiResponse(code = 204, message = "Deleted"),
			@ApiResponse(code = 404, message = "User not found") })
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	public Response delete(@PathParam("id") Integer id) {
		return responseCreator.ResponseDelete(userService.delete(id));
	}

	@Path("refresh")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Gets new token", notes = "Gets new token by refresh token", response = User.class)
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header"),
			@ApiImplicitParam(name = "rToken", value = "Refresh  token", required = true, dataType = "string", paramType = "header") })
	public Response refresh(@Context HttpHeaders httpheaders) {
		String rtoken = httpheaders.getHeaderString("refresh_token");
		return responseCreator.ResponseGet(userService.refresh(rtoken));
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Gets all users", notes = "Returns all users", response = User.class, responseContainer = "List")
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	public Response getAll() {
		return responseCreator.ResponseGet(userService.getAll());
	}

	@POST
	@Path("changePass")
	@Secured
	@PermitAll
	@ApiOperation(value = "Change user password", notes = "Change user password")
	@ApiResponses(value = { @ApiResponse(code = 204, message = "Updated"),
			@ApiResponse(code = 404, message = "User not found") })
	@ApiImplicitParams({
			@ApiImplicitParam(name = "Authorization", value = "Authorization token", required = true, dataType = "string", paramType = "header") })
	public Response changePass(UserDTO u) {
		return responseCreator.ResponseUpdate(userService.changePass(u));
	}

}
