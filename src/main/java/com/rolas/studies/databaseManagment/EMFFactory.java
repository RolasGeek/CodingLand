package com.rolas.studies.databaseManagment;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.glassfish.hk2.api.Factory;

public class EMFFactory  implements Factory<EntityManagerFactory>{

	 private final EntityManagerFactory emf;
	 
    public EMFFactory (){
        emf = Persistence.createEntityManagerFactory("CodingLand");
    }
	@Override
	public EntityManagerFactory provide() {
		return emf;
	}

	@Override
	public void dispose(EntityManagerFactory instance) {
		// TODO Auto-generated method stub
		
	}

}
