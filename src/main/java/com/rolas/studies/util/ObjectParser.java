package com.rolas.studies.util;

public interface ObjectParser {
	public String mapToJson(Object o);
	public <T> Object mapFromJson(String json,  Class<T> type);
}