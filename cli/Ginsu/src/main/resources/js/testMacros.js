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

/**
 * Checks for Strict equality. Depending on if you are using objects or primitives, this will work 
 * differently. JS is pass by reference for objects, so if you are testing that two objects are
 * equal, this will only work if they are the same reference. For literals, this is simply checking
 * that they evaluate to the same value.
 *
 * @param expected The expected value we are testing
 * @param received The value we expected to see
 * @param message (optional) The message to throw if expected did not match received
 *
 * @throws an error message if expected did not match received
 *
 * TODO: Create an assertEqualObjects function that calls isEqual on the expected object.
 * TODO: Create an assertNotEquals function. This will prevent us from having to add unneccessary
 *	try/catch statements in places where we don't need them.
 */
function assertEquals(received, expected, message) {
  if (received !== expected) {
    if (!message) message = "Expected " + expected + " (type:" +typeof expected+")" + " but received " + received + " (type:" + typeof received+"). Check for value and type.";
    throw message;
  }
};

/**
 * Checks that the expression evaluates to true.
 *
 * @param expression The expression value we are checking
 * @param message (optional) The message to throw if expression does not evaluate to true
 *
 * @throws an error message if expression does not evaluate to true.
 */
function assertTrue(expression, message) {
  if (!expression) {
    if (!message) message = "Assertion failed when expression was: " + expression + 
    	" type:" + typeof expression;
    throw message;
  }
};

/**
 * Checks that the expression evaluates to false.
 *
 * @param expression The expression value we are checking
 * @param message (optional) The message to throw if expression does not evaluate to false
 *
 * @throws an error message if expression does not evaluate to false.
 */
function assertFalse(expression, message) {
  assertTrue(!expression, message);
};

/**
 * Checks that thingie does not evaluate to null or any of its equivalents (i.e. undefined). Note 
 * that this also handles cases where UIAElementNil is returned. However, it does not consider the
 * value false to be an equivalent of null. For that use the assertFalse() function.
 *
 * @param thingie The expected value we are testing
 * @param message (optional) The message to throw if thingie evaluated to a null equivalents
 *
 * @throws an error message if expected did not match received
 */
function assertNotNull(thingie, message) {
  if (thingie === null || typeof thingie === "undefined" || thingie instanceof UIAElementNil) {
    if (!message) message = "Expected not null object";
    throw message;
  }
};

/**
 * Checks that two values from a sort are in an ascending relationship.
 *
 * @param lowValue The value that should be the lower of the two values.
 * @param highValue The value that should be the higher of the two values.
 *
 * @throws an error if the values are not in ascending order.
 */
function assertAscending(lowValue, highValue, msg)
{
	if (lowValue >= highValue)
	{
		throw msg + " Sorted values are not in ascending order. highValue " + highValue + " is not higher than lowValue " + lowValue;
	}
};

/**
 * Checks that two values from a sort are in an descending relationship.
 *
 * @param highValue The value that should be the higher of the two values.
 * @param lowValue The value that should be the lower of the two values.
 *
 * @throws an error if the values are not in descending order.
 */
function assertDescending(highValue, lowValue, msg)
{
	if (lowValue >= highValue)
	{
		throw msg + " Sorted values are not in descending order. lowValue " + lowValue + " is not lower than highValue " + highValue;
	}
};

//TODO Create an assertValid function that will call checkIsValid on a UIAElement Passed in.
//function assertValid(elem, description)...