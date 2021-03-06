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
package com.intuit.tools.imat.commands;

import java.util.HashMap;

import com.intuit.tools.imat.ICommand;

/**
 * @author rpfeffer
 * @dateCreated Mar 26, 2011
 * 
 *              This class exists to provide a single way to access all of the
 *              commands supported by IMAT.
 * 
 */
public class SupportedCommandCollection extends HashMap<String, ICommand> {

	/**
	 * The id of this HashMap, to be used should this class ever be serialized.
	 */
	private static final long serialVersionUID = 1L;

}
