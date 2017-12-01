package unit;

import static org.junit.Assert.*;

import java.time.LocalDateTime;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import unit.beans.CategoryTest;
import unit.beans.PostTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CategoryResourceTest extends JerseyTestApplication{

	private static final String BASE = "category";
	private static final String NAME =  "name";
	private static final String CODE =  "NAME";
	private static final String DESCRIPTION =  "description";
	
	private CategoryTest valid = null;
	private CategoryTest unvalid  = null;
	
	@Before
	public void prepare() {
		valid = new CategoryTest(null, DESCRIPTION, NAME, CODE);
		unvalid = new CategoryTest(null, DESCRIPTION, null, null);
	}
	
	@Test
	public void test1Post() {
		//Valid test
		Response res = target(BASE).request().header("Authorization", "Bearer " + admin_token).post(Entity.json(valid));
		String loc = res.getHeaderString("Location");
		StateHolder.getInstance().setState(Integer.valueOf(loc.substring(31)));
		assertEquals(201, res.getStatus());
		//No token test
		res = target(BASE).request().header("Authorization", "Bearer " ).post(Entity.json(valid));
		assertEquals(401, res.getStatus());
		//Null test
		res = target(BASE).request().header("Authorization", "Bearer " + admin_token).post(null);
		assertEquals(400, res.getStatus());
		//Unvalid test
		res = target(BASE).request().header("Authorization", "Bearer " + admin_token).post(Entity.json(unvalid));
		assertEquals(400, res.getStatus());
	}
	
	
	@Test
	public void test2Get() {
		Response res = target(BASE+ "/" + StateHolder.getInstance().getState()).request().get();
		assertEquals(200, res.getStatus());
		res = target(BASE + "/"  + 0).request().get();
		assertEquals(404, res.getStatus());
		res = target(BASE + "/"  + 22752527).request().get();
		assertEquals(404, res.getStatus());
	}
	
	@Test
	public void test3Update() {
		//Valid test
		CategoryTest updateable =  new CategoryTest(StateHolder.getInstance().getState(), DESCRIPTION, NAME,CODE);
		Response res = target(BASE).request().header("Authorization", "Bearer " + admin_token).put(Entity.json(updateable));
		assertEquals(204, res.getStatus());
		//No token test
		res = target(BASE).request().header("Authorization", "Bearer " ).put(Entity.json(updateable));
		assertEquals(401, res.getStatus());
		//No id test
		updateable.setId(null);
		res = target(BASE).request().header("Authorization", "Bearer " + admin_token).put(Entity.json(updateable));
		assertEquals(404, res.getStatus());
	}

	@Test
	public void test4Delete() {
		//Valid test
		Response res = target(BASE + "/" + StateHolder.getInstance().getState()).request().header("Authorization", "Bearer " + admin_token).delete();
		assertEquals(204, res.getStatus());
		//Unvalid id test
		res = target(BASE + "/" + Integer.MAX_VALUE).request().header("Authorization", "Bearer " + admin_token).delete();
		assertEquals(404, res.getStatus());
		//No token
		res = target(BASE + "/" + StateHolder.getInstance().getState()).request().header("Authorization", "Bearer ").delete();
		assertEquals(401, res.getStatus());
		//Token without role "ADMIN"
		token = utils.issueToken(U_NAME, utils.toDate(LocalDateTime.now().plusMinutes(45L)), false);
		res = target(BASE + "/" + StateHolder.getInstance().getState()).request().header("Authorization", "Bearer " + token).delete();
		assertEquals(403, res.getStatus());
	}
	

	@Test
	public void test5GetAll() {
		Response res = target(BASE+ "/" ).request().get();
		assertEquals(200, res.getStatus());
	}

}
