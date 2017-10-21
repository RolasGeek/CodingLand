package com.rolas.studies.rest;

import java.net.URI;
import java.util.Date;

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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.rolas.studies.dao.category.CategoryDao;
import com.rolas.studies.dao.topic.TopicDao;
import com.rolas.studies.dao.user.UserDao;
import com.rolas.studies.entities.Category;
import com.rolas.studies.entities.Topic;
import com.rolas.studies.entities.User;
import com.rolas.studies.security.Secured;
import com.rolas.studies.service.topic.TopicService;
import com.rolas.studies.util.ResponseCreator;

@Path("topic")
public class TopicsResource {

	@Inject ResponseCreator responseCreator;
	
	@Inject TopicService topicService;

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(@PathParam("id") Integer id, @QueryParam("categoryId") Integer categoryId) {
		return responseCreator.ResponseGet(id != 0 ? 
				topicService.getTopic(id) : topicService.getByCategory(categoryId));
	}

	@DELETE
	@Path("/{id}")
	@Secured
	@RolesAllowed("ADMIN")
	public Response delete(@PathParam("id") Integer id) {
		return responseCreator.ResponseDelete(topicService.delete(id));
	}

	@POST
	@Secured
	@PermitAll
	public Response post(Topic topic, @Context UriInfo uriInfo) {
		Topic persisted = topicService.insert(topic);
		return responseCreator.ResponseCreated(uriInfo, persisted.getId(), persisted);
	}

	@PUT
	@Secured
	@PermitAll
	public Response update(Topic receivedTopic) {
		return responseCreator.ResponseUpdate(topicService.update(receivedTopic));
	}

}
