/*******************************************************************************
* Copyright (c) 2011 Intuit, Inc.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the Eclipse Public License v1.0
* which accompanies this distribution, and is available at
* http://www.opensource.org/licenses/eclipse-1.0.php
* 
* Contributors:
*     Intuit, Inc - initial API and implementation
*******************************************************************************/

/**
 * TODO: Now that this file has been generated, if you wish to modify its name to something like
 * LoginView or HomeView to match the first view in your mobile app, you should do the following 
 * things:
 *		1) Rename This file to match the name of the new view
 *		2) update the import reference in views_inc.js
 *		3) change this.viewName to match the name of the new view.
 */
AUTO.StarterView = Class.extend(IMAT.BaseView, {
	
	/**
	 * Initialize the view. Grab references to all things on the screen that are of importance and
	 * set them as properties of the class.
	 */
	initialize: function()
	{
		// **** Important Note for those ramping up on JavaScript ****
		// One major difference between inheritance we are using and classical inheritance is 
		// that when we say "parent()" in a function that we are overriding, we are referring to that
		// parent's method, not the parent object itself.
		//
		// Also note that parent() is not a construct of the javascript language, but rather a 
		// reference set up by the inheritance model we are using in IMAT.
		//
		// In java the line below would look like this: "super(view);"
		this.parent();
		this.viewName = "StarterView";
		
		//If you wanted to keep reference to something on a view for convenience, that should be 
		//done here.
		this.eventsButton = this.getElement("eventsButton");
// 		this.infoButton = this.getElement("infoButton");
// 		this.intuitButton = this.getElement("intuitButton");
// 		this.featuresButton = this.getElement("featuresButton");
// 		this.settingsButton = this.getElement("settingsButton");
		
		//The next line can be removed. They are here just to let you know what is going on
		//during the first time that you run the tests
		IMAT.log_debug("initializing AUTO." + this.viewName);
		
		//IMAT.log_state() is your best friend. Pay close attention to her. She will get you through 
		//the day. :-)
		//IMAT.log_state();
		
		//The call below is an important part of our pattern. All views should validate their 
		//initial state when they are initialized.
		//Validate the initial view state
		this.validateInitialViewState();
	},

	//////////////////////////////    View State Validators    /////////////////////////////////////
	
	/**
	 * Validate the view in its default initial state
	 */
	validateInitialViewState : function()
	{
		//All Validate functions should make use of the validate state function, which is defined in
		//the base view that, all view classes inherit from. The validate state method adds 
		//consistency in logging and error handling. See its definition for more details
		this.validateState("INITIAL", false, this, function(that){
			//Note in the above call the use of "this" and "that". When the validateState() function
			//is called, internal to its call "this" gets passed as an argument to the anonymous 
			//function, which has a parameter called "that". So, within the scope of the anonymous
			//function, "that" is a reference to the view defined in this file. 
			
			//e.g the following line should hold true
			assertTrue(that.viewName == "StarterView");
		});
	},
	
	//TODO: Add more validate functions here
	
	
	//////////////////////////////////    View Actions    //////////////////////////////////////////
	
	/**
	 * Do some action on the UI of the application. 
	 * 
	 * NOTE: Actions abstract away the low level specifics of the UI interactions from the test 
	 * definitions. All direct actions on the UI should be invoked through view Action Functions.
	 *
	 * NOTE: All Actions, by convention should end with the word "Action"
	 */
	someAction : function()
	{
		IMAT.log_debug("The someAction() function.");
		
		//This is where you would want to start making calls against the UIAutomation API's
		//e.g. this.mainWin.textFields().firstWithName("foobar").tap();
		
		//NOTE: A good place to call validate functions is in the action funcitons themselves. This
		//further reduces the clutter from the test files, and keeps them closer to their intended
		//use as test definition files.
		//e.g. this.validateSomething()
		
		//Every time an action is called, it should return the resulting view of that action.
		//For example, if an action taps on an item in a list, and the result of that tap results 
		//in the app going to a new view for that item, this function should return the view for 
		//that item. If an action is taken that does not switch to a new view, simply return "this".
		
		//TODO: return the resulting view of this action. 
		
	},
	
	selectEventsButtonAction : function() {
		IMAT.log_debug("Executing the testAction function which is supposed to tap the Events button");
		this.target.delay(1);
		this.getElement("eventsButton").tap();
		this.target.delay(3);
		return new AUTO.EventsView();
	},
	
	selectInfoButtonAction : function() {
		IMAT.log_debug("Selecting Info button from home screen.");
		this.target.delay(1);
		this.getElement("infoButton").tap();
		this.target.delay(3);
		return new AUTO.InfoView();
	},
	
	selectIntuitButtonAction : function() {
		IMAT.log_debug("Selecting Intuit button from home screen.");
		this.target.delay(1);
		this.getElement("intuitButton").tap();
		this.target.delay(3);
		return new AUTO.WebView();
	},
	
	selectFeaturesButtonAction : function() {
		IMAT.log_debug("Selecting Features button from home screen.");
		this.target.delay(1);
		this.getElement("featuresButton").tap();
		this.target.delay(3);
		return new AUTO.FeaturesView();	
	},
	
	selectSettingsButtonAction : function() {
		IMAT.log_debug("SelectingFeatures button from home screen.");
		this.target.delay(1);
		this.getElement("settingsButton").tap();
		this.target.delay(3);
		return new AUTO.SettingsView();
	},
	
	checkSavesTextAction : function(textToEnter) {
		IMAT.log_debug("Checking to see if it saves text when you enter into About alert.");
		this.target.delay(1);
		this.getElement("aboutButton").tap();
		// enter text into text field
		// click save
		// assert that the text in field is same as text entered before
		
	},
		
	//TODO: Add more action functions here.
});