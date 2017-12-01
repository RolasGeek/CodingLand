package com.rolas.studies.security;

import java.security.Principal;

import javax.ws.rs.core.SecurityContext;

import com.rolas.studies.entities.User;

public class SecurityContextImpl implements SecurityContext{
	
	private User user;

	public SecurityContextImpl(User user) {
		this.user = user;
	}

	@Override
	public Principal getUserPrincipal() {
		return this.user;
	}

	@Override
	public boolean isUserInRole(String role) {
            return role.equals(user.getRole().getObjectCode());
	}

	@Override
	public boolean isSecure() {
		return false;
	}

	@Override
	public String getAuthenticationScheme() {
		return null;
	}

}
