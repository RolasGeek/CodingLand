package unit;

import static org.junit.Assert.*;

import java.time.LocalDateTime;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import unit.beans.PostTest;
import unit.beans.TopicTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class PostResourceTest  extends JerseyTestApplication{

	private static final String BASE = "post";
	private static final String COMMENT =  "I cant pass this semester";
	private static final String SOLUTION =  "Testing my api ";
	private static final Integer TOPIC_ID =  1;
	private static final Integer UID =  4013;
	
	private PostTest valid = null;
	private PostTest unvalid  = null;
	
	@Before
	public void prepare() {
		valid = new PostTest(null, COMMENT,false, SOLUTION,UID, TOPIC_ID);
		unvalid = new PostTest(null, COMMENT,false, null,UID, TOPIC_ID);
	}
	
	@Test
	public void test1Post() {
		//Valid test
		Response res = target(BASE).request().header("Authorization", "Bearer " + token).post(Entity.json(valid));
		String loc = res.getHeaderString("Location");
		StateHolder.getInstance().setState(Integer.valueOf(loc.substring(27)));
		assertEquals(201, res.getStatus());
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
		res = target(BASE + "/0").queryParam("topicId", TOPIC_ID).request().get();
		assertEquals(200, res.getStatus());
		res = target(BASE + "/"  + 0).request().get();
		assertEquals(404, res.getStatus());
		res = target(BASE + "/"  + 22752527).request().get();
		assertEquals(404, res.getStatus());
	}
	
	@Test
	public void test3Update() {
		//Valid test
		PostTest updateable =  new PostTest(StateHolder.getInstance().getState(), COMMENT,false, SOLUTION,UID, TOPIC_ID);
		Response res = target(BASE).request().header("Authorization", "Bearer " + token).put(Entity.json(updateable));
		assertEquals(204, res.getStatus());
		//No token test
		res = target(BASE).request().header("Authorization", "Bearer " ).put(Entity.json(updateable));
		assertEquals(401, res.getStatus());
		//No id test
		updateable.setId(null);
		res = target(BASE).request().header("Authorization", "Bearer " + token).put(Entity.json(updateable));
		assertEquals(404, res.getStatus());
	}

	@Test
	public void test4Delete() {
		//Valid test
		Response res = target(BASE + "/" + StateHolder.getInstance().getState()).request().header("Authorization", "Bearer " + admin_token).delete();
		assertEquals(204, res.getStatus());
		//Uvalid id test
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
