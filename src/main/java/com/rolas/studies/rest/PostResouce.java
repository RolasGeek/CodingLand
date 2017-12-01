package com.rolas.studies.rest;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.SecurityContext;

import com.rolas.studies.entities.Post;
import com.rolas.studies.entities.User;
import com.rolas.studies.security.Secured;
import com.rolas.studies.service.post.PostService;
import com.rolas.studies.util.ResponseCreator;

@Path("post")
public class PostResouce {
	
	@Inject PostService postService;
	
	@Inject ResponseCreator responseCreator;
	

	@Path("/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(@PathParam("id")Integer id, @QueryParam("topicId")Integer topicId) {
		return responseCreator.ResponseGet(id != 0 ? 
				postService.get(id) : postService.getByTopic(topicId));
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		return responseCreator.ResponseGet(postService.getAll());
	}
	
	@POST
	@Secured
	@PermitAll
	@Produces(MediaType.APPLICATION_JSON)
	public Response post(Post post, @Context UriInfo uriInfo) {
		Post persisted = postService.insert(post);
		if(persisted == null) return Response.status(Status.BAD_REQUEST).build();
		return responseCreator.ResponseCreated(uriInfo, persisted.getId(), persisted);
	}
	
	@PUT
	@Secured
	@PermitAll
	public Response update(Post post ) {
		return responseCreator.ResponseUpdate(postService.update(post));
	}
	
	@Path("/{id}")
	@DELETE
	@Secured
	@PermitAll
	public Response delete(@PathParam("id")Integer id, @Context SecurityContext sc) {
		return responseCreator.ResponseDelete(postService.delete(id, (User) sc.getUserPrincipal()));
	}
	
	
	
}
