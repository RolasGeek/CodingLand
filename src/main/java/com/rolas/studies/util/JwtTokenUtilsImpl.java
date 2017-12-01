package com.rolas.studies.util;

import java.security.Key;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import javax.inject.Inject;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @author Rolandas
 *
 */
public class JwtTokenUtilsImpl  implements JwtTokenUtils{
	
	@Inject KeyGeneratorUtils keyGenerator;
	
	private  LogicLogger log = LogicLogger.getLogger(this.getClass());

	public JwtTokenUtilsImpl() {
	
	}
	
	
	public JwtTokenUtilsImpl(KeyGeneratorUtils keyGenerator) {
		this.keyGenerator = keyGenerator;
	}

	static final String TOKEN_KEY = "DFw88fwef$f4few";
	
	static final String R_TOKEN_KEY = "gew#567cfe$f4few";
	
	public String issueToken(String login, Date expDate, boolean isRefnesh) {
		
		Key key = keyGenerator.generateKey(isRefnesh ? R_TOKEN_KEY : TOKEN_KEY);
		String jwtToken = Jwts.builder().setSubject(login).setIssuer("codingLand").setIssuedAt(new Date())
				.setExpiration(expDate).signWith(SignatureAlgorithm.HS512, key)
				.compact();

		return jwtToken;

	}

	public Date toDate(LocalDateTime localDateTime) {
		return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
	}
	
	public Claims validate(String token) {
		try {
		return Jwts.parser().setSigningKey(keyGenerator.generateKey(TOKEN_KEY)).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			log.debug("JWT token is invalid", e);
			return null;
		}
	}
	
	public Claims validateRefresh(String token) {
		try {
		return Jwts.parser().setSigningKey(keyGenerator.generateKey(R_TOKEN_KEY)).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			log.debug("JWT token is invalid", e);
			return null; 
		}
	}
	
}
