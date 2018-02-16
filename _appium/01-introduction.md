---
permalink: /coteafs/appium/intro/
title: "Introduction"
toc: true
---

### What is coteafs-appium?
**coteafs-appium** is a Tester friendly Mobile Automation framework built on top of Appium. It supports writing Automation Tests for Mobile web and native apps for Android, iOS and Windows platforms for both Mobiles and Tablets. It simplifies writing Automated Tests by enforcing Page Object pattern while writing the Test scripts. It supports both real devices and emulators. It also modularizes the Activity actions from tests thus making tests more maintainable.

### Why it was created?
Using Appium directly is not easy. And to make tests maintainable while using Appium Java client will also be difficult since many users are unaware of which capabilities to use for which device and tend to waste time in debugging in finding out the right combination. Also there is high possibility of code duplication at some place or the other. To reduce this bottlenecks, **coteafs-appium** was created where all the repeated code are handled in the Framework allowing the Tester to concentrate more on the main task, i.e. to write tests for their Application.

### How it is useful?
When you start using **coteafs-appium** you will straight away see the benefits. But if you want to know the benefits before using it then checkout the following highlights of the Framework:

* Scripting time is reduced by more than half.
* It enforces Page object model style of coding.
* It seamlessly supports almost all the devices available in the market including latest **iPhone X**.
* It allows parallel or sequential execution on multiple devices.
* It provides Activity actions modularization through it's abstract Action class.
* It allows configurable customization of delays between actions, screenshots, capabilities of the apps, etc.
* It has inbuilt micro logging which logs all the user actions thus making it easier to diagnose the issue.
* The tests can be written by using this framework with any Testing frameworks like TestNG, JUnit or Cucumber.
* It has pre-defined errors which wraps the Selenium and Appium exceptions in a meaningful way.
* It has inbuilt assertions to verify the device elements.
* **It can start / stop Appium server internally or attach to already running external Appium server.**
