package com.rolas.studies.rest;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import com.rolas.studies.dao.category.CategoryDao;
import com.rolas.studies.entities.Category;
import com.rolas.studies.security.Secured;
import com.rolas.studies.service.category.CategoryService;
import com.rolas.studies.util.ResponseCreator;

@Path("category")
public class CategoryResource {
	
	@Inject CategoryService categoryService;
	
	@Inject ResponseCreator responseCreator;
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		return responseCreator.ResponseGet(categoryService.getAll());
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Secured
	@RolesAllowed("ADMIN")
	public Response insert(Category category, @Context UriInfo uriInfo) {
		Category persisted = categoryService.insert(category);
		return responseCreator.ResponseCreated(uriInfo, persisted.getId(), persisted);
	}
	@PUT
	@Secured
	@RolesAllowed("ADMIN")
	public Response update(Category category) {
		return responseCreator.ResponseUpdate(categoryService.update(category));
	}
	
	@Path("/{id}")
	@DELETE
	@Secured
	@RolesAllowed("ADMIN")
	public Response delete(@PathParam("id")Integer id) {
		return responseCreator.ResponseDelete(categoryService.delete(id));
	}
	
}
