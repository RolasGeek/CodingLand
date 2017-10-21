package com.rolas.studies.util;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.core.Response.Status;

public class ResponseCreatorImpl implements ResponseCreator{

	
		public Response ResponseCreated(UriInfo uriInfo, Integer id, Object entity) {
			UriBuilder builder = uriInfo.getAbsolutePathBuilder();
			builder.path(Integer.toString(id));
			return Response.created(builder.build()).entity(entity).build();	
		}
		public Response ResponseUpdate(Boolean success) {
			return Response.status(success ? Status.NO_CONTENT : Status.NOT_FOUND).build();
		}
		
		public Response ResponseDelete(Boolean success) {
			return Response.status(success ? Status.OK: Status.NOT_FOUND).build();
		}
		
		public Response ResponseGet(Object object) {
			if(object != null) {
				return Response.ok(object).build();
			} else {
				return Response.status(Status.NOT_FOUND).build();
			}
		}
		
}
