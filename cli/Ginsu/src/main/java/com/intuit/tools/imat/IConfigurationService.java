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
package com.intuit.tools.imat;

/**
 * @author rpfeffer
 * @dateCreated Mar 25, 2011
 * 
 *              The First responsibility of the {@link IConfigurationService} is
 *              to define an interface for initializing IMAT configuration.
 * 
 *              The {@link IConfigurationService} also provides an interface for
 *              loading properties of the runtime configuration. We leave it up
 *              to the implementer as to how these properties should be stored.
 *              For example, the easiest way to store them would be in a file on
 *              disk, but they could also be stored in a database, retrieved
 *              from a service, or otherwise...
 * 
 */
public interface IConfigurationService {

	/**
	 * Set up the initial configuration of IMAT. This initialization is meant
	 * to happen during the first use of IMAT to make sure that the project is
	 * set up correctly. This may include accepting a terms of agreement, or
	 * otherwise.
	 */
	public void doFirstTimeInitialization();

	/**
	 * <p>
	 * Determines if IMAT has been initialized. In general, the intent of this
	 * method is to provide a conditional data point on whether the application
	 * should be initialized. Since it is more likely that the app has been
	 * initialized than the opposite, and that there may be other factors that
	 * would determine whether or not we should run the first time
	 * initialization, running first time initialization is explicitly a special
	 * case. Therefore, we have named this from the perspective of the consuming
	 * code so that it would read easier within a conditional:
	 * </p>
	 * 
	 * <pre>
	 * ...
	 * if ( configService.isNotInitialized() && ...)
	 * {
	 * 	configService.doFirstTimeInitialization();
	 * }
	 * ...
	 * </pre>
	 * 
	 * @return true if IMAT has not been initialized, false if it has.
	 */
	public boolean isNotInitialized(String homeDir);

	/**
	 * Load the configuration from the default configuration store(s).
	 * 
	 * @throws MisconfigurationException
	 * @throws {@link ProjectConfigurationNotFoundException}
	 */
	public void loadConfiguration(boolean expectsProjectConfig)
			throws MisconfigurationException,
			ProjectConfigurationNotFoundException;

	public boolean shouldSkipExitStatus();

}
