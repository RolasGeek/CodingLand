package com.rolas.studies.util;

import java.security.Key;

import javax.crypto.spec.SecretKeySpec;


public class KeyGeneratorImpl implements KeyGenerator {
	   @Override
	    public Key generateKey() {
	        String keyString = "GFKSBSL854E3dger355A";
	        Key key = new SecretKeySpec(keyString.getBytes(), 0, keyString.getBytes().length, "DES");
	        return key;
	    }
}
