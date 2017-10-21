package com.rolas.studies.rest;

import java.util.Date;

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
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import com.rolas.studies.dao.post.PostDao;
import com.rolas.studies.entities.Post;
import com.rolas.studies.security.Secured;
import com.rolas.studies.service.post.PostService;
import com.rolas.studies.util.ResponseCreator;

@Path("post")
public class PostResouce {
	
	@Inject PostService postService;
	
	@Inject ResponseCreator responseCreator;
	

	@Path("/{id}")
	@GET
	public Response get(@PathParam("id")Integer id, @QueryParam("topicId")Integer topicId) {
		return responseCreator.ResponseGet(id != 0 ? 
				postService.get(id) : postService.getByTopic(topicId));
	}
	
	@POST
	@Secured
	@PermitAll
	public Response post(Post post, @Context UriInfo uriInfo) {
		Post persisted = postService.insert(post);
		return responseCreator.ResponseCreated(uriInfo, persisted.getId(), persisted);
	}
	
	@PUT
	@Secured
	@PermitAll
	public Response update(Post post ) {
		return responseCreator.ResponseUpdate(postService.update(post));
	}
	
	@DELETE
	@Secured
	@RolesAllowed("ADMIN")
	public Response delete(@QueryParam("id")Integer id) {
		return responseCreator.ResponseDelete(postService.delete(id));
	}
	
	
	
}
