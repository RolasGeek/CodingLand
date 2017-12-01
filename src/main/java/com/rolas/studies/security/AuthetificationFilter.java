package com.rolas.studies.security;

import java.io.IOException;
import java.lang.reflect.Method;
import javax.annotation.Priority;
import javax.annotation.security.DenyAll;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import com.rolas.studies.dao.user.UserDao;
import com.rolas.studies.entities.User;
import com.rolas.studies.util.JwtTokenUtils;
import com.rolas.studies.util.LogicLogger;

/**
 * @author Rolandas
 *
 */

@Provider
@Secured
@Priority(Priorities.AUTHENTICATION)
public class AuthetificationFilter implements ContainerRequestFilter {
	

	@Inject
	private javax.inject.Provider<JwtTokenUtils> jwtToken;

	@Inject
	private javax.inject.Provider<UserDao> userDaoProvider;
	

	@Context
	private ResourceInfo resourceInfo;

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		
		
		// Get the HTTP Authorization header from the request
		String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

		try {
			// Check if the HTTP Authorization header is present and formatted correctly
			if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
				throw new NotAuthorizedException("Authorization header must be provided");
			}

			// Extract the token from the HTTP Authorization header
			String token = authorizationHeader.substring("Bearer".length()).trim();
			// Perform authentification
			requestContext.setSecurityContext(new SecurityContextImpl(authentificate(token)));

			// Checking if user contains roles described or resource
//			if (!isUserAllowed(requestContext)) {
//				throw new NotAuthorizedException("You dont have access to this resource");
//			}

		} catch (Exception e) {
			requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
		}
	}

	
	/**
	 * @param token 
	 * @return
	 */
	public User authentificate(String token) {
		try {
			//Getting token info
			String login = jwtToken.get().validate(token).getSubject();
			User u = userDaoProvider.get().getByName(login);
			LogicLogger.getLogger(AuthetificationFilter.class).info("Logged in:" + u.getName(), null);
			return u;
		} catch (Exception e) {
			e.printStackTrace();
			throw new NotAuthorizedException("Bad token");
		}
	}

//	public boolean isUserAllowed(ContainerRequestContext requestContext) {
//		Method method = resourceInfo.getResourceMethod();
//
//		// @DenyAll on the method takes precedence over @RolesAllowed and @PermitAll
//		if (method.isAnnotationPresent(DenyAll.class)) {
//			refuseRequest();
//		}
//
//		// @RolesAllowed on the method takes precedence over @PermitAll
//		RolesAllowed rolesAllowed = method.getAnnotation(RolesAllowed.class);
//		if (rolesAllowed != null) {
//			performAuthorization(rolesAllowed.value(), requestContext);
//			return true;
//		}
//
//		// @PermitAll on the method takes precedence over @RolesAllowed on the class
//		if (method.isAnnotationPresent(PermitAll.class)) {
//			// Do nothing
//			return true;
//		}
//
//		// @RolesAllowed on the class takes precedence over @PermitAll on the class
//		rolesAllowed = resourceInfo.getResourceClass().getAnnotation(RolesAllowed.class);
//		if (rolesAllowed != null) {
//			performAuthorization(rolesAllowed.value(), requestContext);
//			return true;
//		}
//
//		// @PermitAll on the class
//		if (resourceInfo.getResourceClass().isAnnotationPresent(PermitAll.class)) {
//			// Do nothing
//			return true;
//		}
//		return false;
//
//	}
//
//	/**
//	 * Perform authorization based on roles.
//	 *
//	 * @param rolesAllowed
//	 * @param requestContext
//	 */
//	private void performAuthorization(String[] rolesAllowed, ContainerRequestContext requestContext) {
//
//		if (rolesAllowed.length < 1 && requestContext.getSecurityContext().getUserPrincipal() == null) {
//			refuseRequest();
//		}
//
//		for (final String role : rolesAllowed) {
//			if (requestContext.getSecurityContext().isUserInRole(role)) {
//				return;
//			}
//		}
//
//		refuseRequest();
//	}
//
//	/**
//	 * Refuse the request.
//	 * 
//	 * @throws NotAuthorizedException
//	 */
//	private void refuseRequest() {
//		throw new NotAuthorizedException("You dont have access to this resource");
//	}
}
