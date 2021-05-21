---
title: ORP - Object Repository Pattern
permalink: "/projects/appium/orp/"
---

## Problem Statement

When we write Appium tests traditionally, locators tend to get scattered around our tests and it becomes very difficult to maintain it. Now, when we use Page Object concept, although it is the most recommended approach, it can still be a problem with maintenance when there are too many activities in an App.

## Solution provided by this framework

This framework uses Object repository concept where all the user interactive elements are saved in their respective Activity classes and are declared in `DeviceElement` class. Hence, by using this concept it is easy to maintain the elements of a particular page, thereby, allowing us to access the elements easily.

## What is DeviceElement and how it handles multiple elements?

The `DeviceElement` class saves all the elements available on current Activity in hierarchical structure. Instead of finding all the elements on driver, it will help finding elements in a single hierarchy. It is mandatory to have a root element of that Activity as parent and all it's interactive elements as it's child.

## Example

Suppose you want to create a login test for a mobile app.
Here is an example of how to create `DeviceElement` in `LoginActivity` class

```java
  // This is the root element as seen in Inspector
  // which contains all the other input elements.
  final DeviceElement main = DeviceElement.create ("Main")
    .forAndroid (By.id ("android:id/content"));
  DeviceElement.create ("Back")
    .parent (main)    // Parent of current element.
    .waitStrategy (WaitStrategy.VISIBLE)  // Wait strategy to be used while finding the element.
    .forAndroid (By.xpath ("//android.widget.TextView[@text=\"Back\"]"))     // Locator used to find the element.
    // We can set multiple locators for different Automation names.
    .forAndroid (AutomationType.UIAUTOMATOR2, MobileBy.AndroidUIAutomator ("new UiSelector ().text (\"Back\");"));
  DeviceElement.create ("UserName")
    .forAndroid (MobileBy.AccessibilityId ("username"))
    .index (1)    // Index of element when multiple elements for same locator exists.
    .parent (main);
  DeviceElement.create ("Password")
    .forAndroid (MobileBy.AccessibilityId ("password"))
    .parent (main);
  DeviceElement.create ("Login")
    .forAndroid (MobileBy.AccessibilityId ("login"))
    .parent (main);
```

> Did you notice `forAndroid` method used in the code above?

It refers to locators specific for Android platform.
Likewise, `forIos` method is used to save iOS platform specific locator.

If you still find it difficult to understand, message me by clicking on the chat icon on the extreme right bottom of this site.
