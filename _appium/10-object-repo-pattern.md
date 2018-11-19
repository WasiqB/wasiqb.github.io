---
permalink: /coteafs/appium/orp/
title: "ORP - Object Repository Pattern"
toc: true
---

## Background

When we write Appium tests traditionally, locators tend to get scattered around our tests and it becomes very difficult to maintain it. Now when we use Page Object concept, although it is the most recommended approach, it can still be a problem with maintenance when there are too many activities in an App. So in this scenario, Object repository approach is easy to maintain as there is generic way we can access the elements. This framework uses Object repository concept where all the user interactive elements are saved in their respective Activity classes and are declared in `DeviceElement` class.

## How does DeviceElement handles multiple elements?

The `DeviceElement` class saves all the elements available on current Activity in hierarchical structure. Instead of finding all the elements on driver, it will help finding elements in a single hierarchy. It is mandatory to have a root element of that Activity as parent and all it's interactive elements as it's child.

## How to create DeviceElement for Login Activity?

Let's see an example of how to create `DeviceElement` of a Login Activity.

```java
  // This is the root element as seen in Inspector. This can be any parent
  // displayed in inspector which contains all the other input elements.
  final DeviceElement main = DeviceElement.create ("Main")
    .forAndroid (By.id ("android:id/content"));
  DeviceElement.create ("Back")
    .parent (main)    // Parent of current element.
    .waitStrategy (WaitStrategy.VISIBLE)  // Wait strategy to be used while finding the element.
    .index (1)    // Index of element when multiple elements for same locator exists.
    .forAndroid (By.xpath ("//android.widget.TextView[@text=\"Back\"]"))     // Locator used to find the element.
    // We can set multiple locators for different Automation names.
    .forAndroid (AutomationType.UIAUTOMATOR2, MobileBy.AndroidUIAutomator ("new UiSelector ().text (\"Back\");"));
  DeviceElement.create ("UserName")
    .forAndroid (MobileBy.AccessibilityId ("username"))
    .parent (main);
  DeviceElement.create ("Password")
    .forAndroid (MobileBy.AccessibilityId ("password"))
    .parent (main);
  DeviceElement.create ("Login")
    .forAndroid (MobileBy.AccessibilityId ("login"))
    .parent (main);
```

As you might have noticed `forAndroid` method which refers to locators specific for Android platform. Same way there is `forIos` method for iOS platform to save iOS specific locator.

The code snippet explains everything. If you still find it difficult to understand, you can discuss it with me on our [mailing list][groups] or directly chat with me here.

[groups]: https://groups.google.com/forum/#!forum/coteafs-appium
