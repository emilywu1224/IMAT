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
package com.intuit.tools.imat.validators;

import java.io.File;
import java.io.IOException;

import com.beust.jcommander.IParameterValidator;
import com.beust.jcommander.ParameterException;

/**
 * @author rpfeffer
 * @dateCreated Aug 9, 2011
 * 
 *              //TODO Explain why this file exists and how it is used.
 * 
 */
public class CanonicalFileValidator implements IParameterValidator {

	FileValidationHelper helper = new FileValidationHelper();
	/*
	 * (non-Javadoc)
	 * 
	 * @see com.beust.jcommander.IParameterValidator#validate(java.lang.String,
	 * java.lang.String)
	 */
	public void validate(String name, String value) throws ParameterException {
		try {
			helper.validate(value);
		} catch (IOException e) {
			ParameterException exception = new ParameterException("Could not "
					+ "resolve given path to a canonical path.");
			exception.initCause(e);
			throw exception;
		}
	}
	
	class FileValidationHelper {
		void validate(String value) throws IOException {
			new File(value).getCanonicalFile();
		}
	}
}
