package com.rolas.studies.util;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ObjectParserImpl implements ObjectParser{

	ObjectMapper objectMapper = new ObjectMapper();
	
	@Override
	public String mapToJson(Object o) {
		try {
			return objectMapper.writeValueAsString(o);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return null;
		}
	}

	

	@Override
	public <T> Object mapFromJson(String json, Class<T> type) {
		try {
			return objectMapper.readValue(json, type);
		} catch (IOException e) {
			e.printStackTrace();
			return null;			
			
		}
		
	}


}
