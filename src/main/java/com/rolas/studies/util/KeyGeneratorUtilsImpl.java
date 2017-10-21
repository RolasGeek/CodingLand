package com.rolas.studies.util;

import java.security.Key;

import javax.crypto.spec.SecretKeySpec;


public class KeyGeneratorUtilsImpl implements KeyGeneratorUtils {
	   @Override
	    public Key generateKey(String keyString) {
	        Key key = new SecretKeySpec(keyString.getBytes(), 0, keyString.getBytes().length, "DES");
	        return key;
	    }
}
