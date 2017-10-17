package com.rolas.studies.config;


import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.process.internal.RequestScoped;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;

import com.rolas.studies.dao.categoryDao.CategoryDao;
import com.rolas.studies.dao.categoryDao.CategoryDaoImpl;
import com.rolas.studies.dao.postDao.PostDao;
import com.rolas.studies.dao.postDao.PostDaoImpl;
import com.rolas.studies.dao.topicDao.TopicDao;
import com.rolas.studies.dao.topicDao.TopicDaoImpl;
import com.rolas.studies.dao.userDao.UserDao;
import com.rolas.studies.dao.userDao.UserDaoImpl;
import com.rolas.studies.databaseManagment.EMFFactory;
import com.rolas.studies.databaseManagment.EMFactory;
import com.rolas.studies.security.AuthetificationFilter;
import com.rolas.studies.util.KeyGenerator;
import com.rolas.studies.util.KeyGeneratorImpl;
import com.rolas.studies.util.ObjectParser;
import com.rolas.studies.util.ObjectParserImpl;


public class MyApplication extends ResourceConfig {
 
    public MyApplication() {
    
         packages("com.rolas.studies.rest");
         register(RolesAllowedDynamicFeature.class);
         register(AuthetificationFilter.class);
         register(new AbstractBinder() {
        	    @Override
        	    public void configure() {
        	    	 bindFactory(EMFFactory.class).to(EntityManagerFactory.class).in(Singleton.class);
        	         bindFactory(EMFactory.class).to(EntityManager.class).in(RequestScoped.class);
        	         bind(KeyGeneratorImpl.class).to(KeyGenerator.class).in(Singleton.class);
        	    	 bind(UserDaoImpl.class).to(UserDao.class).in(RequestScoped.class);
        	    	 bind(CategoryDaoImpl.class).to(CategoryDao.class).in(RequestScoped.class);
        	    	 bind(TopicDaoImpl.class).to(TopicDao.class).in(RequestScoped.class);
        	    	 bind(PostDaoImpl.class).to(PostDao.class).in(RequestScoped.class);
        	    	 bind(ObjectParserImpl.class).to(ObjectParser.class).in(Singleton.class);
        	    }
        	});
 
        // Register resources and providers using package-scanning.
       
    }
}