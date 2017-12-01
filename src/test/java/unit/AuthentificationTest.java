package unit;

import static org.junit.Assert.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import com.rolas.studies.entities.User;

import unit.beans.UserTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class AuthentificationTest extends JerseyTestApplication {

	private static final String AUTH_PATH  = "auth";
	private static final String LOGIN_PATH  = "auth/login";
	private static final String ME_PATH  = "auth/me";
	private static final String REFRESH_PATH  = "auth/refresh";
	
	
	private UserTest valid  = null;
	private UserTest unvalid = null;
	private UserTest regUser  = null;
	
	@Before
	public void usersSetUp() {
		valid =  new UserTest(U_NAME, U_PASS);
		unvalid = new UserTest(U_NAME, U_PASS_INC);
		regUser =  new UserTest(U_NAME1, U_PASS);
	}
	
	@Test
	public void testLogin() {
		//Valid test
		Response res = target(LOGIN_PATH).request().post(Entity.json(valid));
		assertEquals(200, res.getStatus());
		//Unvalid test
		res = target(LOGIN_PATH).request().post(Entity.json(unvalid));
		assertEquals(404, res.getStatus());
	}

	@Test
	public void testMe() {
		//Testing correct
		Response res = target(ME_PATH).request().header(AUTH_HEADER,  "Bearer " + token).get();
		User u = res.readEntity(User.class);
		assertEquals(200, res.getStatus());
		assertEquals("Checking username", U_NAME, u.getUserName());
		//Testing without token
		res = target(ME_PATH).request().header(AUTH_HEADER,  "Bearer ").get();
		assertEquals(401, res.getStatus());
	}

	@Test
	public void testRefresh() {
		Response res = target(REFRESH_PATH).request().header(REFRESH_H,  r_token).get();
		assertEquals(200, res.getStatus());
		String random = "fwefergywddiwefwfew5few6fwe2few"; // Random symbols
		res = target(REFRESH_PATH).request().header(REFRESH_H,  random).get();
		assertEquals(404, res.getStatus());
		res = target(REFRESH_PATH).request().get();
		assertEquals(404, res.getStatus());
	}
	
	
	@Test
	public void test1Register() {
		Response res = target(AUTH_PATH).request().post(Entity.json(regUser));
		assertEquals(200, res.getStatus());
		regUser.setUserName(null);
		res = target(AUTH_PATH).request().post(Entity.json(regUser));
		assertEquals(200, res.getStatus());
		
	}
	
	@Test
	public void test2GetUser() {
		Response res = target(AUTH_PATH + "/" + U_NAME1).request().header("Authorization", "Bearer " + admin_token).get();
		User u = res.readEntity(User.class);
		StateHolder.getInstance().setState(u.getId());
		assertEquals(200, res.getStatus());
		
	}
	
	
	@Test
	public void test4Delete() {
		Response res = target(AUTH_PATH + "/" +StateHolder.getInstance().getState()).request().header("Authorization", "Bearer " + admin_token).delete();
		assertEquals(204, res.getStatus());
		//Unvalid id test
		res = target(AUTH_PATH + "/" + Integer.MAX_VALUE).request().header("Authorization", "Bearer " + admin_token).delete();
		assertEquals(404, res.getStatus());
	}
	
	
	@Test
	public void test3Update() {
		regUser.setUserName("UPDATED_USER");
		regUser.setId(StateHolder.getInstance().getState());
		Response res = target(AUTH_PATH).request().header("Authorization", "Bearer " + admin_token).put(Entity.json(regUser));
		assertEquals(204, res.getStatus());
		regUser.setId(Integer.MAX_VALUE);
		res = target(AUTH_PATH).request().header("Authorization", "Bearer " + admin_token).put(Entity.json(regUser));
		assertEquals(404, res.getStatus());
		regUser.setId(null);
		res = target(AUTH_PATH).request().header("Authorization", "Bearer " + admin_token).put(Entity.json(regUser));
		assertEquals(404, res.getStatus());
	}
	
	@Test
	public void test5GetAll() {
		Response res = target(AUTH_PATH+ "/" ).request().get();
		assertEquals(200, res.getStatus());
	}

	

}
