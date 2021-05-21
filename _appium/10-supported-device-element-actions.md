---
permalink: /projects/appium/supported-device-element-actions/
title: "Supported Device Element Actions"
---

## Overview

There are plenty of device element specific actions which are supported in the framework and to trigger that action on device, you need to call the `onElement` method on the Current Activity and pass the element name on which you need to perform action. Same is illustrated below:

```java
  . . .
  login.onElement ("userName").enterText ("User1");
  . . .
```

## Actions common for all the device elements

Following is the list of actions common on all the device elements:
* `appendText`: This method will append text to the end of the string in the text box without clearing any existing text.
* `clear`: This will clear the entered text or selection on the element.
* `click`: It is similar to tap but more useful for web testing.
* `enabled`: It checks and returns the element state whether it is enabled or not.
* `enterText`: It will clear any existing text and will write the specified string.
* `doubleTap`: It will double tap on element.
* `nTaps`: It will perform n-taps on element.
* `dragDrop`: It will drag drop of element to another element.
* `getDevice`: It returns the current device instance under test.
* `getDriver`: It returns current driver instance for external use.
* `longPress`: It will long press on the element until context menu appears.
* `pinch`: This will zoom out of the current element by specified distance from elements border to the center of the element.
* `selected`: It checks and return the state whether the element is selected or not.
* `swipe`: It will swipe on the co-ordinates inside the element starting at the specified position on the element (LEFT, RIGHT, UP, DOWN, CENTER) and swiping up-to the distance specified from the starting position.
* `tap`: It will tap on the element.
* `text`: It will return the text on the element.
* `visible`: It checks and return the state whether the element is visible or not.
* `zoom`: This will zoom in to the current element by specified distance from center of the element to the elements borders.
* `verifyThat`: It returns the verification instance which we can use to perform assertions on the elements.

> Note:
> Zoom and Pinch will only work when Automation Type is Espresso.

## Known issue and workarounds
* **Swipe Down:**
  * **Issue:** When swiping on element with finger on top border doesn't swipes from top to down but instead swipes down to top. Same is also reported to Appium team [#827](https://github.com/appium/java-client/issues/827).
  * **Workaround:** In coteafs-appium, it has handled the workaround for the issue by starting 5 pixels away from border.
