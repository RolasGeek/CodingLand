package unit;

import java.time.LocalDateTime;

import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.Application;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.process.internal.RequestScoped;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Before;
import org.junit.BeforeClass;

import com.rolas.studies.config.MyApplication;
import com.rolas.studies.dao.category.CategoryDao;
import com.rolas.studies.dao.category.CategoryDaoImpl;
import com.rolas.studies.dao.post.PostDao;
import com.rolas.studies.dao.post.PostDaoImpl;
import com.rolas.studies.dao.topic.TopicDao;
import com.rolas.studies.dao.topic.TopicDaoImpl;
import com.rolas.studies.dao.user.UserDao;
import com.rolas.studies.dao.user.UserDaoImpl;
import com.rolas.studies.databaseManagment.EMFFactory;
import com.rolas.studies.databaseManagment.EMFactory;
import com.rolas.studies.rest.AuthResource;
import com.rolas.studies.rest.PostResouce;
import com.rolas.studies.rest.TopicsResource;
import com.rolas.studies.security.AuthetificationFilter;
import com.rolas.studies.service.category.CategoryService;
import com.rolas.studies.service.category.CategoryServiceImpl;
import com.rolas.studies.service.post.PostService;
import com.rolas.studies.service.post.PostServiceImpl;
import com.rolas.studies.service.topic.TopicService;
import com.rolas.studies.service.topic.TopicServiceImpl;
import com.rolas.studies.service.user.UserService;
import com.rolas.studies.service.user.UserServiceImpl;
import com.rolas.studies.util.JwtTokenUtils;
import com.rolas.studies.util.JwtTokenUtilsImpl;
import com.rolas.studies.util.KeyGeneratorUtils;
import com.rolas.studies.util.KeyGeneratorUtilsImpl;
import com.rolas.studies.util.ResponseCreator;
import com.rolas.studies.util.ResponseCreatorImpl;
import com.sun.research.ws.wadl.Resource;

/**
 * 
 * @author Rolandas
 * For test to work there must be admin user with username = admin and test user with username = JUnitTestUser
 */
public class JerseyTestApplication extends JerseyTest {
	

	
	protected static final String U_NAME = "JUnitTestUser";   
	protected static final String A_NAME = "admin";
	protected static final String U_NAME1 = "JUnitTestUser1"; 
	protected static final String U_PASS = "test";
	protected static final String U_PASS_INC = "wrong";
	protected static final String AUTH_HEADER = "Authorization";
	protected static final String REFRESH_H = "refresh_token";
	protected JwtTokenUtilsImpl utils = null;
	protected String token = null; //Simple token
	protected String admin_token = null; //Admin token
	protected String r_token = null; //refresh token 

	@Override
	protected Application configure() {
		return new MyApplication();
	}


	
	@Before
	public void setUp() throws Exception {
		super.setUp();
		if(token == null) {
		 utils = new JwtTokenUtilsImpl(new KeyGeneratorUtilsImpl());
		 token = utils.issueToken(U_NAME, utils.toDate(LocalDateTime.now().plusMinutes(45L)), false);
		 r_token = utils.issueToken(U_NAME, utils.toDate(LocalDateTime.now().plusMinutes(45L)), true);
		 admin_token = utils.issueToken(A_NAME, utils.toDate(LocalDateTime.now().plusMinutes(45L)), false);
		}
	}
}