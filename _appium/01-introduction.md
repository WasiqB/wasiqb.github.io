---
permalink: /coteafs/appium/intro/
title: "Introduction"
toc: true
---

### What is coteafs-appium?
**coteafs-appium** is a Tester friendly Mobile Automation framework built on top of Appium. It supports writing Automation Tests for Mobile web, native and hybrid apps for Android and iOS platforms for both Mobiles and Tablets. It simplifies writing Automated Tests by enforcing Page Object pattern while writing the Test scripts. It supports both real devices and emulators. It also modularizes the Activity actions from tests thus making tests more clean, readable and maintainable.

### Why it was created?
Using Appium directly is a tedious task. And to make tests readable and maintainable while using Appium Java client will also be difficult since many users are unaware of which capabilities to use for which device and tend to waste time in debugging in finding out the right combination. Also there is high possibility of code duplication at some place or the other. To reduce this bottlenecks, **coteafs-appium** was created where all the repeated code are handled in the Framework allowing the Tester to concentrate more on the main task, i.e. to write tests for their Application.

### How it is useful?
Following are the key features of the framework:

* It seamlessly supports Android and iOS platform mobiles and tablets.
* It can start / stop Appium server internally or attach to already running external Appium server.
* It allows configurable customization of delays between actions, screenshots, capabilities of the apps, etc.
* It checks battery status and will terminate test execution when battery level is less than 20%.
* It allows video recording of tests on Android and iOS.
* It allows executing tests on Cloud based platforms like BrowserStack, SauceLabs, etc.
* It allows capturing screenshots on device while test execution.
* It allows parallel or sequential execution on multiple devices.
* It allows getting clipboard data from the device.
* It allows toggling of mobile data, wifi, location services and Airplane mode.
* It has inbuilt micro logging which logs all the user actions thus making it easier to diagnose the issue.
* The tests can be integrated with any Testing frameworks like TestNG, JUnit and Cucumber.
* Errors are handled in customized way.
* It has inbuilt assertions to verify the device elements.
