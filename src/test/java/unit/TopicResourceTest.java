package unit;
import static org.junit.Assert.*;

import java.time.LocalDateTime;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.experimental.categories.Category;
import org.junit.runners.MethodSorters;

import unit.beans.TopicTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TopicResourceTest extends JerseyTestApplication{
	

	private static final String BASE = "topic";
	private static final String DESC =  "I cant pass this semester";
	private static final String NAME =  "Testing my api ";
	private static final Integer CID =  3002;
	private static final Integer UID =  4013;
	
	private TopicTest valid =null;
	private TopicTest unvalid  = null;
	
	@Before
	public void prepare() {
		valid = new TopicTest(null, DESC,false, NAME, CID, UID);
		unvalid = new TopicTest(null, DESC,false, null, CID, UID);
	}
	
	@Test
	public void test1Post() {
		//Valid test
		Response res = target(BASE).request().header("Authorization", "Bearer " + token).post(Entity.json(valid));
		String loc = res.getHeaderString("Location");
		StateHolder.getInstance().setState(Integer.valueOf(loc.substring(28)));
		assertEquals(201, res.getStatus());
		//Null
		res = target(BASE).request().header("Authorization", "Bearer " + token).post(null);
		assertEquals(400, res.getStatus());
		//No token test
		res = target(BASE).request().header("Authorization", "Bearer " ).post(Entity.json(valid));
		assertEquals(401, res.getStatus());
		//Unvalid test
		res = target(BASE).request().header("Authorization", "Bearer " + token).post(Entity.json(unvalid));
		assertEquals(400, res.getStatus());
	}
	
	
	@Test
	public void test2Get() {
		Response res = target(BASE+ "/" + StateHolder.getInstance().getState()).request().get();
		assertEquals(200, res.getStatus());
		res = target(BASE + "/0").queryParam("categoryId", 1).request().get();
		assertEquals(200, res.getStatus());
		res = target(BASE + "/0").request().get();
		assertEquals(404, res.getStatus());
		res = target(BASE + "/"  + 22752527).request().get();
		assertEquals(404, res.getStatus());
	}
	
	@Test
	public void test3Update() {
		//Valid test
		TopicTest updateable = new TopicTest(StateHolder.getInstance().getState(), DESC,false, NAME, CID, UID);
		Response res = target(BASE).request().header("Authorization", "Bearer " + token).put(Entity.json(updateable));
		assertEquals(204, res.getStatus());
		//No token test
		res = target(BASE).request().header("Authorization", "Bearer freferqdwwq" ).put(Entity.json(updateable));
		assertEquals(401, res.getStatus());
		//No name test
		updateable.setId(Integer.MAX_VALUE);
		res = target(BASE).request().header("Authorization", "Bearer " + token).put(Entity.json(updateable));
		assertEquals(404, res.getStatus());
		//No name test
		updateable.setId(StateHolder.getInstance().getState());
		updateable.setName(null);
		res = target(BASE).request().header("Authorization", "Bearer " + token).put(Entity.json(updateable));
		assertEquals(404, res.getStatus());
	}

	@Test
	public void test4Delete() {
		//Valid test
		Response res = target(BASE + "/" + StateHolder.getInstance().getState()).request().header("Authorization", "Bearer " + admin_token).delete();
		assertEquals(204, res.getStatus());
		//Not existing
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
		Response res = target(BASE+ "/").request().get();
		assertEquals(200, res.getStatus());
	}
	

}
