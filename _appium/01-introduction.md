---
title: Introduction
permalink: "/projects/appium/intro/"
---

## What is coteafs-appium?

**coteafs-appium** is a tester friendly Mobile Automation framework built on top of Appium Java client. It supports writing automation tests for Mobile's native, web and hybrid apps for Android and iOS platforms for both mobiles and tablets (Real / Simulators). It simplifies writing automated tests by utilizing Page Object pattern while writing the test scripts. It also modularize the page specific actions from tests thus making tests more clean, readable and maintainable.

## Why it was created?

I was assigned to work on Mobile Automation for a project in one of my previous organization. Since there was no Automation done for mobile app at that time in my organization, I selected Appium due to its popularity, but while using it, I noticed that there is plenty of coding needed to add / handle following features and problems,

- Difficulty in remembering so many capabilities and settings
- Logging of all the UI interaction events
- Screenshot capture on Error or before any action
- Video recording of test execution
- Run test for Android and iOS simultaneously
- Handling different gestures gracefully
- Asserting of element attributes, etc.

Hence, I thought of writing my own wrapper framework which does all the things mentioned and make it open source so others can also benefit from it.

## How it is useful?

Following are the key features of the framework:

- It seamlessly supports Android and iOS platform mobiles and tablets.
- It can start / stop Appium server internally or attach to already running external Appium server.
- It allows executing tests on Cloud based platforms like BrowserStack.
- It allows configurable customization of delays between actions, screenshots, capabilities of the apps, etc.
- It has inbuilt methods which allows using gestures like swipe, zoom and pinch with ease.
- It checks battery status and will terminate test execution when battery level is less than 20% on real device.
- It allows video recording of tests on Android and iOS.
- It allows video streaming of test execution for Android.
- It allows changing device language to test different locales on Android and iOS.
- It allows capturing screenshots on device while test execution.
- It allows parallel or sequential execution on multiple devices.
- It allows getting clipboard data from the device.
- It allows toggling of mobile data, WiFi, location services and Airplane mode.
- It has inbuilt micro logging which logs all the user actions thus making it easier to diagnose the issue.
- The tests can be integrated with any Testing frameworks like TestNG, JUnit and Cucumber.
- Errors are handled in customized way.
- It has inbuilt assertions to verify the device elements.
