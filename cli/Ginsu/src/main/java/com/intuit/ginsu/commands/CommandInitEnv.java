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

import java.io.File;

import com.beust.jcommander.Parameter;
import com.intuit.ginsu.cli.converters.FileConverter;

/**
 * @author rpfeffer
 * @dateCreated Mar 25, 2011
 *
 * //TODO Explain why this file exists and how it is used.
 *
 */
public class CommandInitEnv implements ICommand{

	public static final String NAME = "init-env";
	
	public static final String TEMPLATE = "-template";
	@Parameter(names = {TEMPLATE, "-t"}, converter = FileConverter.class,
			description = "The instruments trace template file to use when "
				+ "running iOS Automation.", required = true)
	File template;
	public void run() {
		// TODO Auto-generated method stub
		
	}
	public void cleanUp() {
		// TODO Auto-generated method stub	
	}
	
	public String getName()
	{
		return CommandInitEnv.NAME;
	}
	
	@Override
	public boolean equals(Object command)
	{
		return (command != null &&
				command.getClass() == this.getClass() &&
				((CommandInitEnv)command).getName() == this.getName());
	}
	public boolean isRunnable() {
		return true;
	}
}