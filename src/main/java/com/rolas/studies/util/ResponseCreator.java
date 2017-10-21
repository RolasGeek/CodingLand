package com.rolas.studies.util;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

public interface ResponseCreator {

	public Response ResponseCreated(UriInfo uriInfo, Integer id, Object entity);
	public Response ResponseUpdate(Boolean success);
	public Response ResponseDelete(Boolean success);
	public Response ResponseGet(Object object) ;
}


