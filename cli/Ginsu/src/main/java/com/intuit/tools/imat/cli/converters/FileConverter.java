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
package com.intuit.tools.imat.cli.converters;

import java.io.File;
import java.io.IOException;

import com.beust.jcommander.IStringConverter;

/**
 * @author rpfeffer
 * @dateCreated Mar 25, 2011
 * 
 *              This file converts command line options of type {@link File}
 *              from string representations of their path
 * 
 * @see com.beust.jcommander.IStringConverter
 */
public class FileConverter implements IStringConverter<File> {

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.beust.jcommander.IStringConverter#convert(java.lang.String)
	 */
	public File convert(String value) {
		if (value.contains("~")) {
			value = value.replaceAll("~", System.getProperty("user.home"));
		}
		File result = null;
		try {
			result = new File(value).getCanonicalFile();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
}
