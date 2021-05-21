---
title: Introduction
permalink: "/projects/appium/intro/"
---

## What is coteafs-appium?

**coteafs-appium** is a tester friendly Mobile Automation framework built on top of Appium. It supports writing automation tests for Mobile's web, native and hybrid apps for Android and iOS platforms for both mobiles and tablets (Real / Simulators). It simplifies writing automated tests by utilizing Page Object pattern while writing the test scripts. It also modularizes the activity actions from tests thus making tests more clean, readable and maintainable.

## Why it was created?

As using Appium directly is a tedious task, and also considering the following difficulties faced,
it was decided to create this framework:

- Helping the QA community by creating a mobile test automation framework which helps them use Appium easily without putting much efforts.
- Finding the right combination of capabilities.
- Handle code duplication.
- Wastage of time in code debugging.
- Handle difficult swipe gestures gracefully and easily.
- Write clean and maintainable test scripts.

## How it is useful?

Following are the key features of the framework:

- It seamlessly supports Android and iOS platform mobiles and tablets.
- It can start / stop Appium server internally or attach to already running external Appium server.
- It allows configurable customization of delays between actions, screenshots, capabilities of the apps, etc.
- It has inbuilt methods which allows using gestures like swipe, zoom and pinch with ease.
- It checks battery status and will terminate test execution when battery level is less than 20% on real device.
- It allows video recording of tests on Android and iOS.
- It allows video streaming of test execution of Android and iOS.
- It allows changing device language to test different locales on Android and iOS.
- It allows executing tests on Cloud based platforms like BrowserStack.
- It allows capturing screenshots on device while test execution.
- It allows parallel or sequential execution on multiple devices.
- It allows getting clipboard data from the device.
- It allows toggling of mobile data, Wifi, location services and Airplane mode.
- It has inbuilt micro logging which logs all the user actions thus making it easier to diagnose the issue.
- The tests can be integrated with any Testing frameworks like TestNG, JUnit and Cucumber.
- Errors are handled in customized way.
- It has inbuilt assertions to verify the device elements.
