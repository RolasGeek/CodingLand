package com.rolas.studies.rest;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.rolas.studies.dao.categoryDao.CategoryDao;
import com.rolas.studies.util.ObjectParser;

@Path("category")
public class CategoryResource {
	
	@Inject CategoryDao categoryDao;
	
	@Inject ObjectParser objectParser;
	
	
	@GET
	public Response getAll() {
		return Response.ok(objectParser.mapToJson(categoryDao.getAll()), MediaType.APPLICATION_JSON).build();
	}
}
