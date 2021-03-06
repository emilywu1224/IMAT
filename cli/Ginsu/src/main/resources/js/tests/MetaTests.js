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

//Core test framework
/**
 * This class handles things common to all Functional Tests
 * @ignore 
 */
IMAT.MetaTests = Class.extend(IMAT.BaseTestSet, {
	
	title: "MetaTests",
	/**
	 * Initializes the MetaTest Class object.
	 */
	initialize: function() {
		this.types = [undefined, null, 0, 1, true, false, "", "val", {key:"val"}, [1,2,3], 
			function(){}];
		
		this.trueTypes = [1, true, "val", {key:"val"}, [1,2,3], function(){}, [], {}];
		this.falseTypes = [undefined, null, 0,  false, "", 10/"foo"];
		
		this.anEqualObj = {key:"val"};
		this.otherEqualObj = {key:"val"};
		
		var nilObj = UIATarget.localTarget().frontMostApp().mainWindow().elements().firstWithName("foobarMonkeyTaco");
		this.nullTypes = [undefined, null, nilObj];
		this.nonNullTypes = [ 0, 1, true, false, "", "val", {key:"val"}, [1,2,3], function(){}];
		
		this.empty = "";
		this.whiteSpace = " ";
		this.needle = "<needle>";
		this.needleByItself = "<needle>";
		this.needleAtStart = "<needle>haystack";
		this.needleAtEnd = "haystack<needle>";
		this.needleInMiddle = "haystack<needle>haystack";
		
		this.exceptionWithoutMessage = new TypeError("no message here!");
		this.exceptionWithMessage = new TypeError("<needle> haystack");
	},
	
	/**
	 * setup the App to normalize the way tests are run. Initialize the view context and do whatever
	 * we can to clear out the old set of test data and set the right target server environment
	 */
	setUp: function() {
		//Do nothing
	},
	
	/**
	 * tearDown the App to normalize the way tests finish. Clear the cache if possible.
	 */
	tearDown: function() {
		//Do nothing
	},
	
	setUpTestSet: function() {
		//Do nothing.
	},
	
	tearDownTestSet: function()	{
		//Do nothing
	},
	
	doCleanup: function() {
		//Do nothing
	},
	
	/**
	 * Test all of the macros so that we have a clear definition of what they will allow.
	 */
	testMacros: function() {
		//---------------------------------assertEquals-------------------------------------------//
		//-----------positive cases--------------//
		var i;
		
		IMAT.log_debug("testing positive cases for assertEquals");
		for(i = 0; i < this.types.length; i++)
		{
			IMAT.log_trace("this.types[i] is :" + this.types[i]);
			assertEquals(this.types[i], this.types[i]);
		}
		
		//test that references to the same object are equals
		assertEquals(this.anEqualObj, this.anEqualObj);
		
		//-----------negative cases--------------//
		// (non-comprehensive)
		IMAT.log_debug("testing negative cases for assertEquals");
		for(i = 0; i < this.types.length; i++)
		{
			IMAT.log_trace("this.types[i] is :" + this.types[i]);
			var message = "The two unequal objects, " + this.types[i] + " and "+ 
					this.types[(i+1) % this.types.length] + " evaluated as equals when they should"+
					" not have";
			
			try
			{
				assertEquals(this.types[i], this.types[(i+1) % this.types.length]);
				
				//if we get here, that means one of these things evaluated as equals. log a failure.
				UIALogger.logFail(message);
			}
			catch (e)
			{
				assertTrue(e instanceof IMAT.AssertionException);
			}
		}
		try
		{
			assertEquals(10/"foo", 10/"foo");
			
			//if we get here, that means one of these things evaluated as equals. log a failure.
			UIALogger.logFail("NaN is never equal to itself!");
		}
		catch (e2)
		{
			assertTrue(e2 instanceof IMAT.AssertionException);
		}
		try
		{
			//other identical objects will not be equal since this is equality by reference.
			IMAT.log_debug("Checking two objects of equal value");
			assertEquals(this.anEqualObj, this.otherEqualObj);
		}
		catch (e3)
		{
			assertTrue(e3 instanceof IMAT.AssertionException);
		}
		
		//---------------------------------assertTrue---------------------------------------------//
		//-----------positive cases--------------//
		IMAT.log_trace("Testing positive cases for assertTrue");
		for(i = 0; i < this.trueTypes.length; i++)
		{
			IMAT.log_trace("this.trueTypes[i] is :" + this.trueTypes[i]);
			assertTrue(this.trueTypes[i]);
		}
		
		//-----------negative cases--------------//
		IMAT.log_trace("Testing negative cases for assertTrue");
		for(i = 0; i < this.falseTypes.length; i++)
		{
			IMAT.log_trace("this.falseTypes[i] is :" + this.falseTypes[i]);
			try
			{
				assertTrue(this.falseTypes[i]);
				
				//if we get here, that means one of these things evaluated as equals. log a failure.
				UIALogger.logFail("Something was true when it should have been false. Type was " +
					this.falseTypes[i]);
			}
			catch (e4)
			{
				assertTrue(e4 instanceof IMAT.AssertionException);
			}
		}
		
		//---------------------------------assertFalse--------------------------------------------//
		//-----------positive cases--------------//
		IMAT.log_trace("Testing positive cases for assertFalse");
		for(i = 0; i < this.falseTypes.length; i++)
		{
			IMAT.log_trace("this.falseTypes[i] is :" + this.falseTypes[i]);
			assertFalse(this.falseTypes[i]);
		}
		
		//-----------negative cases--------------//
		IMAT.log_trace("Testing negative cases for assertFalse");
		for(i = 0; i < this.trueTypes.length; i++)
		{
			IMAT.log_trace("this.trueTypes[i] is :" + this.trueTypes[i]);
			try
			{
				assertFalse(this.trueTypes[i]);
				
				//if we get here, that means one of these things evaluated as equals. log a failure.
				UIALogger.logFail("Something was false when it should have been true. Type was " +
					this.trueTypes[i]);
			}
			catch (e5)
			{
				assertTrue(e5 instanceof IMAT.AssertionException);
			}
		}

		//---------------------------------assertNotNull------------------------------------------//
		//-----------positive cases--------------//
		IMAT.log_trace("Testing positive cases for assertNotNull");
		for(i = 0; i < this.nonNullTypes.length; i++)
		{
			IMAT.log_trace("this.nonNullTypes[i] is :" + this.nonNullTypes[i]);
			assertNotNull(this.nonNullTypes[i]);
		}
		
		//-----------negative cases--------------//
		IMAT.log_trace("Testing negative cases for assertNotNull");
		for(i = 0; i < this.nullTypes.length; i++)
		{
			IMAT.log_trace("this.nullTypes[i] is :" + this.nullTypes[i]);
			try
			{
				assertNotNull(this.nullTypes[i]);
				
				//if we get here, that means one of these things evaluated as equals. log a failure.
				UIALogger.logFail("Something is null when it should have been not null. Type was " +
					this.nullTypes[i]);
			}
			catch (e6)
			{
				assertTrue(e6 instanceof IMAT.AssertionException);
			}
		}
	},
	
	/**
	 * Make sure that we are finding all the functions we care about in a test test and ignoring
	 * the ones we don't.
	 */
	testIsPropValidTestCase: function()	{
		var myRunner = new IMAT.TestRunner();
		var mockTests = new IMAT.MockTests();
		var i;
		
		//-----------positive cases--------------//
		IMAT.log_debug("testing positive cases for IsPropValidTestCase");
		for(i = 0; i < mockTests.myTests.length; i++)
		{
			IMAT.log_trace("mockTests.myTests[i] is :" + mockTests.myTests[i]);
			assertTrue(myRunner.isPropValidTestCase(mockTests.myTests[i], mockTests));
		}
		
		//-----------negative cases--------------//
		IMAT.log_debug("testing negative cases for IsPropValidTestCase");
		for(i = 0; i < mockTests.myNonTests.length; i++)
		{
			IMAT.log_trace("mockTests.myNonTests[i] is :" + mockTests.myNonTests[i]);
			assertFalse(myRunner.isPropValidTestCase(mockTests.myNonTests[i], mockTests));
		}
	},
	
	/**
	 * Make sure that we are filtering out all the tests we don't care about in a test set
	 */
	testTestCaseMatchesFilter: function() {
		var myRunner = new IMAT.TestRunner();
		var mockTests = new IMAT.MockTests();
		var i;
		
		//-----------zero filter cases--------------//
		IMAT.log_debug("testing positive cases for IsPropValidTestCase");
		for(i = 0; i < mockTests.myTests.length; i++)
		{
			IMAT.log_trace("mockTests.myTests[i] is :" + mockTests.myTests[i]);
			assertTrue(myRunner.testCaseMatchesFilter(mockTests.myTests[i], mockTests));
		}
		
		//-----------single filter cases--------------//
		myRunner.addFilters(["Needle"]);
		IMAT.log_debug("testing positive cases for IsPropValidTestCase");
		for(i = 0; i < mockTests.myTests.length; i++)
		{
			IMAT.log_trace("mockTests.myTests[i] is :" + mockTests.myTests[i]);
			if(mockTests.myTests[i] == "testNeedle")
			{
				assertTrue(myRunner.testCaseMatchesFilter(mockTests.myTests[i], mockTests));
			}
			else
			{
				assertFalse(myRunner.testCaseMatchesFilter(mockTests.myTests[i], mockTests));
			}
		}
		
		//-----------multi filter cases--------------//
		myRunner.addFilters(["4LeafClover"]);
		IMAT.log_debug("testing positive cases for IsPropValidTestCase");
		for(i = 0; i < mockTests.myTests.length; i++)
		{
			IMAT.log_trace("mockTests.myTests[i] is :" + mockTests.myTests[i]);
			if(mockTests.myTests[i] == "testNeedle" || mockTests.myTests[i] == "test4LeafClover")
			{
				assertTrue(myRunner.testCaseMatchesFilter(mockTests.myTests[i], mockTests));
			}
			else
			{
				assertFalse(myRunner.testCaseMatchesFilter(mockTests.myTests[i], mockTests));
			}
		}
		
		
	},
	
	/**
	 * Make sure we are able to decipher one exception from the next.
	 */
	testExceptions: function() {
		//-----------positive cases--------------//
		IMAT.log_debug("testing positive cases for Exceptions");
		assertTrue(IMAT.exceptionStartsWithMessage(this.needleAtStart, this.needle));
		assertTrue(IMAT.exceptionStartsWithMessage(this.exceptionWithMessage, this.needle));

		//-----------negative cases--------------//
		IMAT.log_debug("testing negative cases for Exceptions");
		assertFalse(IMAT.exceptionStartsWithMessage(this.exceptionWithoutMessage, this.needle));
		assertFalse(IMAT.exceptionStartsWithMessage("", this.needle));
	},
	
	/**
	 * Make sure that the extensions functions for strings work as expected.
	 */
	testStringExtensions: function() {
		//-----------positive cases--------------//
		IMAT.log_debug("testing positive cases for stringExtensions");
		assertTrue(this.needleByItself.startsWith(this.needle));
		assertTrue(this.needleAtStart.startsWith(this.needle));

		//-----------negative cases--------------//
		IMAT.log_debug("testing negative cases for stringExtensions");
		assertFalse(this.needleAtEnd.startsWith(this.needle));
		assertFalse(this.needleInMiddle.startsWith(this.needle));
		assertFalse(this.empty.startsWith(this.needle));
		assertFalse(this.whiteSpace.startsWith(this.needle));
	},
	
	testManualPassMacro: function() {
		manualPass();
		manualPass("With message");
		
		//2nd param will not show up in logs
		manualPass("With message... ", "And Another"); 
	},
	
	testManualFailMacro: function() {
		var latestException = undefined;
		IMAT.log_debug("Testing with no arguments");
		latestException = this.manualfailHelper(function(){manualFail();});
		
		var expectedMessage = "With message";
		IMAT.log_debug("Testing with 1 argument");
		latestException = this.manualfailHelper(function(){manualFail(expectedMessage);});
		assertTrue((latestException.message.indexOf(expectedMessage) > -1), "The " +
			"exception did not contain the expected string. Exception: " +
			latestException);
		
		//2nd param will not show up in logs
		var unexpectedMessage  ="And Another";
		IMAT.log_debug("Testing with 2 arguments");
		latestException = this.manualfailHelper(function(){manualFail(expectedMessage, unexpectedMessage);});
		assertTrue((latestException.message.indexOf(expectedMessage) > -1), "The " +
			"exception did not contain the expected string. Exception: " +
			latestException);
		assertTrue((latestException.message.indexOf(unexpectedMessage) == -1), "The " +
			"exception had the unexpected string. Exception: " +
			latestException);
	},
	
	manualfailHelper: function(func) {
		var didThrowException = true;
		var result = undefined;
		try {
			func();
			didThrowException = false; // we should never get here.
		} catch (e){
			assertTrue(e instanceof IMAT.AssertionException, "the exception thrown should have been of type IMAT.AssertionException");
			assertTrue((e.message.indexOf("MANUAL:") > -1), "The exception did not contain the expected string.");
			result = e;
		}
		assertTrue(didThrowException, 
			"manualFail() did not throw an exception when it should have");
		return result;
	},
	
	testReportingAddTest: function() {
		var reporter = new IMAT.TestReporter();
		assertTrue(reporter.automatedTests.length === 0, "An empty test reporter should have no automated tests");
		assertTrue(reporter.manualTests.length === 0, "An empty test reporter should have no manual tests");
		
		//add a manual test
		var manualSignature = "testSomething.testManuallyFoobar";
		reporter.addTest(manualSignature);
		assertEquals(reporter.automatedTests.length, 0, "A reporter with one manual test should have 0 automated tests");
		assertEquals(reporter.manualTests.length, 1);
		assertFalse(reporter.manualTests[manualSignature].hasRun, "has run should be false");
		assertEquals(typeof reporter.manualTests[manualSignature].result, "undefined");
		
		//Add an automated test
		var automatedSignature = "testSomething.testFoobar";
		reporter.addTest(automatedSignature);
		assertTrue(reporter.automatedTests.length == 1, "After adding automated test should have 1 automated tests");
		assertTrue(reporter.manualTests.length == 1, "After adding automated test should still have 1 manual test");
		assertFalse(reporter.automatedTests[automatedSignature].hasRun, "has run should be false");
		assertEquals(typeof reporter.automatedTests[automatedSignature].result, "undefined");
	},
	
	testReportingMarkTestAsRanWithResult: function() {
		var reporter = new IMAT.TestReporter();
		var manualSignature = "testSomething.testManuallyFoobar";
		var automatedSignature = "testSomething.testFoobar";
		reporter.addTest(manualSignature);
		reporter.addTest(automatedSignature);
		assertFalse(reporter.manualTests[manualSignature].hasRun, "has run should be false");
		assertEquals(typeof reporter.manualTests[manualSignature].result, "undefined");
		assertFalse(reporter.automatedTests[automatedSignature].hasRun, "has run should be false");
		assertEquals(typeof reporter.automatedTests[automatedSignature].result, "undefined");
		
		reporter.markTestAsRanWithResult(manualSignature, IMAT.TestReporter.RESULT_PASS);
		assertTrue(reporter.manualTests[manualSignature].hasRun, "has run should be true for ran manual test");
		assertEquals(reporter.manualTests[manualSignature].result,  
			IMAT.TestReporter.RESULT_PASS, 
			"result should be true for manual test");
		
		reporter.markTestAsRanWithResult(automatedSignature, IMAT.TestReporter.RESULT_PASS);
		assertTrue(reporter.automatedTests[automatedSignature].hasRun, "has run should be true for ran automated test");
		assertEquals(reporter.automatedTests[automatedSignature].result, 
			IMAT.TestReporter.RESULT_PASS,
			"result should be true for automated test");
	},
	
	testReportingIsManualTest: function() {
		var reporter = new IMAT.TestReporter();
		var manualTestSignatures = ["foo.testManually1", "foo.testManuallyA", "foo.testManually_"];
		var nonManualTestSignatures = ["foo.testSomething", "foo.test", "foo.", "foo", ".", ""];
		var bogusValues = [false, 1, function(){}, {}, []];
		
		var i;
		var sig = "";
		for (i = 0; i < manualTestSignatures.length; i++) {
			sig = manualTestSignatures[i];
			assertTrue(reporter.isManualTest(sig), sig + " should be a manual test");
		}
		
		for (i = 0; i < nonManualTestSignatures.length; i++) {
			sig = nonManualTestSignatures[i];
			assertFalse(reporter.isManualTest(sig), sig + " should not be a manual test");
		}
		
		for (i = 0; i < bogusValues.length; i++) {
			sig = bogusValues[i];
			assertFalse(reporter.isManualTest(sig), sig + " should not be a manual test");
		}		
	},
	
	testReportingCollectResultsOfTests: function() {
		var reporter = new IMAT.TestReporter();
		var manualSignatures = ["testSomething.testManuallyPass", 
			"testSomething.testManuallyError", 
			"testSomething.testManuallyFailure"];
			
		var automatedSignatures = ["testSomething.testPass", 
			"testSomething.testError", 
			"testSomething.testFailure"];
			
		var resultTypes = [ IMAT.TestReporter.RESULT_PASS,
			IMAT.TestReporter.RESULT_ERROR,
			IMAT.TestReporter.RESULT_FAILURE
		];
		
		var arrayOfArrays = [manualSignatures, automatedSignatures];
		
		for (var i = 0; i < arrayOfArrays.length; i++) {
			var currentArray = arrayOfArrays[i];
			for (var j = 0; j < currentArray.length; j++) {
				reporter.addTest(currentArray[j]);
				reporter.markTestAsRanWithResult(currentArray[j], resultTypes[j]);
			}
		}
		reporter.addTest("testSomething.testManuallyIncomplete");
		reporter.addTest("testSomething.testIncomplete");
		
		reporter.collectResultsOfTests();
		assertEquals(reporter.numFailed, 2);
		assertEquals(reporter.numPassed, 2);
		assertEquals(reporter.numErrored, 2);
		assertEquals(reporter.incompleteTests.length, 2);
	}
});

IMAT.suiteRunner.addTestSet( new IMAT.MetaTests());