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
 * 	Constructs a TestRunner object
 *	@class The {@link IMAT.TestRunner} object is the workhorse of the test
 *	execution lifecycle of a given Test Set. It's major responsibilities 
 *	include:
 *  <ul>
 *		<li>Inspecting a Test Set to determine which properties are
 * 		runnable testcases.</li>
 *		<li>Filtering out tests which do not match the set of internal 
 * 		filters it currently holds</li>
 *  	<li>Running tests which match the filters it currently holds</li>
 *  </ul>
 * @memberOf IMAT 
 */
 /*
  * @TODO implement an optional retry mechanism to gain more validation when
  *	tests fail.
  */
IMAT.TestRunner = Class.extend(/** @lends IMAT.TestRunner# */{
	
	/**
	 * The constructor called when invoking "new" on this class object.
	 * @ignore 
	 */
	initialize: function()
	{
		this.filtersArray = new Array();
	},
	
	/**
	 * Returns the signature for the test case
	 * 
	 * @param {IMAT.BaseTestSet} testSet
	 * 					A testSet in our test harness
	 * @param {string} testCaseName 
	 * 					The name of the test case to be run.
	 * 
	 * @return {string} The signature of the test case. This will be of the form
	 * <code>SomeTestSet.testCaseName()</code> where SomeTestSet is the test set
	 *  class and testCaseName is the method representing the test case.
	 */
	getTestCaseSignature: function(testSet, testCaseName)
	{
		return testSet.title + "." + testCaseName + "()";
	},
	
	/**
	 * Determines if a given property is a function we should run as part of the 
	 * test
	 * 
	 * @param {mixed} prop
	 * 					A property of the test object which may or may not be a 
	 * 					test case
	 * @param {IMAT.BaseTestSet} testSet
	 * 					A testSet in our test harness
	 * 
	 * @return {boolean} true if prop is a function and starts with word "test" 
	 * like "testSomething: function(){...},"
	 */
	isPropValidTestCase: function(prop, testSet)
	{
		var funcPattern = /^test[0-9,a-z,A-Z,_]+/;
		return typeof testSet[prop] == "function" && funcPattern.test(prop.toString());
	},
	
	/**
	 * Determines if a test case matches at least one of the filters given with 
	 * the test set.
	 * 
	 * @param {string} testCase
	 * 					The name of the test case to be run.
	 * @param {IMAT.BaseTestSet} testSet
	 * 					A testSet in our test harness
	 * 
	 * @return {boolean} true if the testCase matches at least one of the filters.
	 */
	testCaseMatchesFilter: function(testCase, testSet)
	{
		var filterPattern;
		var isMatch = false;
		var testSignature = this.getTestCaseSignature(testSet, testCase);
		if(this.filtersArray.length > 0)
		{
			for(var i = 0; i < this.filtersArray.length; i++)
			{
				filterPattern = new RegExp(this.filtersArray[i]);
				if (filterPattern.test(testSignature))
				{
					isMatch = true;
					break;
				}
			}
		}
		else
		{
			isMatch = true;
		}
		return isMatch;
	},
	
	/**
	 * Convenience function for determining if the prop is a test in the testSet 
	 * that should be run. This function validates that prop is both a valid 
	 * test function and that it matches at least one filter.
	 * 
	 * @param {mixed} prop
	 * 					A property of the test object which may or may not be a 
	 * 					test case
	 * @param {IMAT.BaseTestSet} testSet
	 * 					A testSet in our test harness
	 *
	 * @returns {boolean} true if the test should be run.
	 */
	isPropRunnableTest: function(prop, testSet)
	{
		return (this.isPropValidTestCase(prop, testSet) && 
			this.testCaseMatchesFilter(prop, testSet));
	},
	
	/**
	 * Determine if a Test Set contains runnable test cases.
	 *
	 * @param {IMAT.BaseTestSet} testSet.
	 * 					A testSet in our test harness
	 *
	 *  @returns {boolean} true if the testSet has runnable test cases.
	 */
	containsRunnableTestCases: function(testSet)
	{		
		var isRunnable = false;
		for(prop in testSet)
		{
			if (this.isPropRunnableTest(prop, testSet)) 
			{
				isRunnable = true;
				break;
			}
		}
		return isRunnable;
	},
	
	/**
	 * Logs out a list of the runnable tests in the testSet. This is a function 
	 * written for test development convenience to see if your filters are 
	 * including the appropriate tests.
	 *
	 * @param {IMAT.BaseTestSet} testSet.
	 * 					A Test Set which we may execute against.
	 */
	previewRunnableTests: function(testSet)
	{
		IMAT.log_debug("	TestSet: " + testSet.title);
		for(prop in testSet)
		{
			if (this.isPropRunnableTest(prop, testSet)) 
			{
				IMAT.log_debug("		" + testSet.title + "." + prop + "()");
			}
		}
	},
	
	/**
	 * Runs a given test case in the test set. Never call this function 
	 * directly. Its merely a helper for {@link IMAT.TestRunner.runTestCases}
	 * 
	 * @param {IMAT.BaseTestSet} testSet.
	 * 					A Test Set which we will execute.
	 * @param {string} testCase
	 * 					The name of the test case we are about to run.
	 */
	runTestCase: function(testSet, testCaseName)
	{
		var testSignature = this.getTestCaseSignature(testSet, testCaseName);
		
		//this try block allows us our "fail fast" approach
		try 
		{
			IMAT.log_start(testSignature);
			testSet.setUp();
			testSet[testCaseName]();
			testSet.tearDown();
			//if we get here, the test has passed.
			IMAT.log_pass(testSignature);
		}
		catch (e) 
		{
			//first log an error
			IMAT.log_error(e);
			//then print out the current view tree
			if (testSet.logOnFailure) 
			{
				IMAT.log_state();
			}
			//finally log that the test has failed.
			IMAT.log_fail(testSignature);
			
			//Invoke the cleanup process so that we can make an attempt at starting the next test 
			//fresh
			testSet.doCleanup();
		}
	},
	
	/**
	 * Runs a set of test cases. This is the main function of the TestRunner 
	 * class. It drives each test set through its testing lifecycle.
	 *
	 * @param {IMAT.BaseTestSet} testSet.
	 * 					A Test Set which we will execute.
	 * 
	 * @param {function} test
	 *  				The test we are about to run.
	 */
	runTestCases: function(testSet, test)
	{		
		if(this.containsRunnableTestCases(testSet))
		{
			IMAT.log_start(testSet.title + ".setUpTestSet();");
			IMAT.log_trace("Setting up the test set");
			testSet.setUpTestSet();
			IMAT.log_pass(testSet.title + ".setUpTestSet();");
			for(prop in testSet)
			{
				//NOTE: We do not check for hasOwnProperty() because that function does not check the 
				//prototype of the object, just the object itself
				if (this.isPropRunnableTest(prop, testSet)) 
				{
					this.runTestCase(testSet, prop);
				}
			}
			IMAT.log_start(testSet.title + ".tearDownTestSet();");
			IMAT.log_trace("Tearing down the test set.");
			testSet.tearDownTestSet();
			IMAT.log_pass(testSet.title + ".tearDownTestSet();");
		}
	},
	
	/**
	 * Maintain an internal reference to the array of filters so that the set of
	 * runnable tests can be generated. Users should never call this method 
	 * directly.
	 *
	 * @param {array} the Array of strings to use as filters.
	 * 
	 * @see {IMAT.SuiteRunner.previewAllRunnableTests} for the full set of 
	 * documentation.
	 */
	addFilters : function(filtersArray)
	{
		this.filtersArray = this.filtersArray.concat(filtersArray);
	}
	
});
