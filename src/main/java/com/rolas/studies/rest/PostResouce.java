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
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import com.rolas.studies.dao.postDao.PostDao;
import com.rolas.studies.entities.Post;
import com.rolas.studies.security.Secured;
import com.rolas.studies.util.ObjectParser;

@Path("post")
public class PostResouce {
	
	@Inject PostDao postDao;
	
	@Inject ObjectParser objectParser;

	@GET
	public Response get(@QueryParam("id")Integer id, @QueryParam("topicId")Integer topicId) {
		if(id != null && topicId == null) {
			return Response.ok(objectParser.mapToJson(postDao.get(id))).build();
		} else if(id == null && topicId != null) {
			return Response.ok(objectParser.mapToJson(postDao.getByTopicId(topicId))).build();
		} else {
			return Response.ok(objectParser.mapToJson(postDao.getAll())).build();
		}
	
	}
	
	@POST
	@Secured
	@PermitAll
	public Response post(String json, @Context UriInfo uriInfo) {
		Post post = (Post) objectParser.mapFromJson(json, Post.class);
		post.setInsertDate(new Date());
		Integer id = postDao.persist(post);
		UriBuilder builder = uriInfo.getAbsolutePathBuilder();
		builder.path(Integer.toString(id));
		return Response.created(builder.build()).entity(post).build();
	}
	
	@PUT
	@Secured
	@PermitAll
	public Response update(String json) {
		Post post = (Post) objectParser.mapFromJson(json, Post.class);
		if(post.getId() != null) {
			Post fromDb = postDao.get(post.getId());
			fromDb.setComment(post.getComment());
			fromDb.setSolution(post.getSolution());
			fromDb.setUpdateDate(new Date());
			if(postDao.update(fromDb)) {
				return Response.status(Status.NO_CONTENT).build();
			}
		}
		post.setUpdateDate(new Date());
		return Response.status(Status.NOT_FOUND).build();
	}
	
	@DELETE
	@Secured
	@RolesAllowed("ADMIN")
	public Response delete(@QueryParam("id")Integer id) {
		if(postDao.delete(id)) {
		return Response.ok().build();
		} else {
			return Response.status(Status.NO_CONTENT).build();
		}
	}
	
	
	
}
