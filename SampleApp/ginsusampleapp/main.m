//
//  main.m
//  sampleApp
//
//  Created by Benjamin, Sargon on 4/15/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

int main(int argc, char *argv[]) {
    
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    int retVal = UIApplicationMain(argc, argv, nil, @"sampleAppAppDelegate");
    [pool release];
    return retVal;
}
