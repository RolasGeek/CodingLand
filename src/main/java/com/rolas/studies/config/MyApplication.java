package com.rolas.studies.config;


import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.process.internal.RequestScoped;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;

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


public class MyApplication extends ResourceConfig {
 
    public MyApplication() {
    	
    	
    
         packages("com.rolas.studies.rest","com.fasterxml.jackson.jaxrs.json");
         register(RolesAllowedDynamicFeature.class);
         register(AuthetificationFilter.class);
         register(new AbstractBinder() {
        	    @Override
        	    public void configure() {
        	    	 //Database manegment
        	    	 bindFactory(EMFFactory.class).to(EntityManagerFactory.class).in(Singleton.class);
        	         bindFactory(EMFactory.class).to(EntityManager.class).in(RequestScoped.class);
        	         //Dao
        	    	 bind(UserDaoImpl.class).to(UserDao.class).in(RequestScoped.class);
        	    	 bind(CategoryDaoImpl.class).to(CategoryDao.class).in(RequestScoped.class);
        	    	 bind(TopicDaoImpl.class).to(TopicDao.class).in(RequestScoped.class);
        	    	 bind(PostDaoImpl.class).to(PostDao.class).in(RequestScoped.class);
        	    	 //Service
        	    	 bind(UserServiceImpl.class).to(UserService.class).in(RequestScoped.class);
        	    	 bind(CategoryServiceImpl.class).to(CategoryService.class).in(RequestScoped.class);
        	    	 bind(TopicServiceImpl.class).to(TopicService.class).in(RequestScoped.class);
        	    	 bind(PostServiceImpl.class).to(PostService.class).in(RequestScoped.class);
        	    	 //Util
        	    	 bind(KeyGeneratorUtilsImpl.class).to(KeyGeneratorUtils.class).in(Singleton.class);
        	    	 bind(ResponseCreatorImpl.class).to(ResponseCreator.class).in(Singleton.class);
        	    	 bind(JwtTokenUtilsImpl.class).to(JwtTokenUtils.class).in(Singleton.class);
        	    }
        	});
 
        // Register resources and providers using package-scanning.
       
    }
}