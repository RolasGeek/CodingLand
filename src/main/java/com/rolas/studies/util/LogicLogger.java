package com.rolas.studies.util;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LogicLogger {
	
	
	private Logger LOGGER;
	
	
	public LogicLogger(Logger lOGGER) {
		LOGGER = lOGGER;
	}

	public static LogicLogger getLogger(Class<?> type) {
		return new LogicLogger(Logger.getLogger(type.getName()));
	}
	
	public  void error(String msg, Throwable t) {
		LOGGER.log(Level.SEVERE, msg, t);
	}
	
	public  void debug(String msg, Throwable t) {
		LOGGER.log(Level.FINE, msg, t);
	}
	

	public  void info(String msg, Throwable t) {
		LOGGER.log(Level.INFO, msg, t);
	}
	
}
