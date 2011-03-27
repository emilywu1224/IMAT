/*******************************************************************************
 * Copyright (c) 2009 Intuit, Inc.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.opensource.org/licenses/eclipse-1.0.php
 * 
 * Contributors:
 *     Intuit, Inc - initial API and implementation
 *******************************************************************************/
package com.intuit.ginsu.commands;

import java.io.PrintWriter;

import com.beust.jcommander.Parameter;
import com.google.inject.Singleton;

/**
 * @author rpfeffer
 * @dateCreated Mar 25, 2011
 * 
 *              //TODO Explain why this file exists and how it is used.
 * 
 */
@Singleton
public class CommandMain implements ICommand{

	public static final String NAME = "main";
	
	/**
	 * TODO: Document the log level option
	 */
	public static final String LOG_LEVEL = "-log_level";
	@Parameter(names = LOG_LEVEL, description = "The highest level"
		+" of info we should be writing to the logs")
	public Integer logLevel = 1;
	
	/**
	 * TODO: Document The verbose option
	 */
	public static final String VERBOSE = "-verbose";
	@Parameter(names = {VERBOSE, "-v"}, description = "output more"
		+" information to standard out")
	public boolean verbose = false;

	/**
	 * TODO: Document The option to turn auto-update off
	 */
	public static final String AUTO_UPDATE_OFF = "-auto_update_off";
	@Parameter(names = AUTO_UPDATE_OFF, description = "Set the "
			+ AUTO_UPDATE_OFF + " flag if you do not want to update "
			+ "the CLI tool when it runs.")
	public boolean autoUpdateOff = false;
	
	private final PrintWriter printWriter;
	
	public CommandMain(PrintWriter printWriter)
	{
		this.printWriter = printWriter;
	}

	public void run() {
		//do nothing
		
	}

	public void cleanUp() {
		//do nothing
	}
	
	public String getName()
	{
		return CommandMain.NAME;
	}
	
	@Override
	public boolean equals(Object command)
	{
		return (command != null &&
				command.getClass() == this.getClass() &&
				((CommandMain)command).getName() == this.getName());
	}

	public boolean isRunnable() {
		return true;
	}
}
