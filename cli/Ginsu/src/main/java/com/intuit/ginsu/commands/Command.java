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

import java.util.logging.*;;

/**
 * @author rpfeffer
 * @dateCreated Apr 3, 2011
 * 
 *              //TODO Explain why this file exists and how it is used.
 * 
 */
public abstract class Command implements ICommand {

	private static final int UNSET_EXIT_STATUS = -1;
	private static final String UNSET_ERROR_MESSAGE = "";
	protected final PrintWriter printWriter;
	protected final Logger logger;
	protected int exitStatus;
	protected String errorMessage;

	public Command(PrintWriter printwriter, Logger logger) {
		this.printWriter = printwriter;
		this.logger = logger;
		this.exitStatus = UNSET_EXIT_STATUS;
		this.errorMessage = UNSET_ERROR_MESSAGE;
	}

	public int getExitStatus() throws IncompleteCommandException {
		this.assertCommandComplete();
		return this.exitStatus;
	}

	public String getErrorMessage() throws IncompleteCommandException {
		this.assertCommandComplete();
		return this.errorMessage;
	}
	
	public boolean isCommandComplete()
	{
		return (this.exitStatus != UNSET_EXIT_STATUS);
	}

	private void assertCommandComplete() throws IncompleteCommandException {
		if (!this.isCommandComplete()) {
			throw new IncompleteCommandException(this, Thread.currentThread()
					.getStackTrace()[3].getMethodName());
		}
	}
}