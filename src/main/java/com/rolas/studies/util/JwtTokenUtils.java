package com.rolas.studies.util;

import java.time.LocalDateTime;
import java.util.Date;

import io.jsonwebtoken.Claims;

public interface JwtTokenUtils {
	
	/**
	 * Makes a jwt token with given params
	 * 
	 * @param login
	 *            - token owner name
	 * @param expDate
	 *            - token expiration date
	 * @return token
	 */
	public String issueToken(String login, Date expDate, boolean isRefnesh);

	public Date toDate(LocalDateTime localDateTime);

	public Claims validate(String token);
	
	public Claims validateRefresh(String token);
}
