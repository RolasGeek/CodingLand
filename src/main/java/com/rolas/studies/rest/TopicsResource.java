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
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.rolas.studies.dao.categoryDao.CategoryDao;
import com.rolas.studies.dao.topicDao.TopicDao;
import com.rolas.studies.dao.userDao.UserDao;
import com.rolas.studies.entities.Category;
import com.rolas.studies.entities.Topic;
import com.rolas.studies.entities.User;
import com.rolas.studies.security.Secured;
import com.rolas.studies.util.ObjectParser;

@Path("topic")
public class TopicsResource {

	@Inject
	TopicDao topicDao;

	@Inject
	ObjectParser objectParser;

	@Inject
	CategoryDao categoryDao;

	@Inject
	UserDao userDao;

	@GET
	public Response get(@QueryParam("id") Integer id, @QueryParam("categoryId") Integer categoryId) {
		if (id == null && categoryId == null) { //Get all
			return Response.ok(objectParser.mapToJson(topicDao.getAll()), MediaType.APPLICATION_JSON).build();
		} else if (id == null && categoryId != null) {//Get all by category id
			return Response.ok(objectParser.mapToJson(topicDao.getByCategory(categoryId)), MediaType.APPLICATION_JSON).build();
		} else {//Get one
			return Response.ok(objectParser.mapToJson(topicDao.get(id)), MediaType.APPLICATION_JSON)
					.build();
		}
	}

	@DELETE
	@Secured
	@RolesAllowed("ADMIN")
	public Response delete(@QueryParam("id") Integer id) {
		if (topicDao.delete(id)) {
			return Response.ok().build();
		} else {
			return Response.status(Status.NOT_FOUND).build();
		}
	}

	@POST
	@Secured
	@PermitAll
	public Response post(String json, @Context UriInfo uriInfo) {
		Topic topic = (Topic) objectParser.mapFromJson(json, Topic.class);
		topic.setInsertDate(new Date());
		topic.setPostCount(0);
		Integer id = topicDao.persist(topic);
		UriBuilder builder = uriInfo.getAbsolutePathBuilder();
		builder.path(Integer.toString(id));
		return Response.created(builder.build()).entity(topic).build();
	}

	@PUT
	@Secured
	@PermitAll
	public Response update(String json) {
		Topic receivedTopic = (Topic) objectParser.mapFromJson(json, Topic.class);
		Topic fromDatabase = (Topic) topicDao.get(receivedTopic.getId());
		fromDatabase.setDescription(receivedTopic.getDescription());
		fromDatabase.setName(receivedTopic.getName());
		fromDatabase.setAnswered(receivedTopic.isAnswered());
		return Response.status(topicDao.update(fromDatabase) ? Status.NO_CONTENT : Status.NOT_FOUND).build();
	}

}
