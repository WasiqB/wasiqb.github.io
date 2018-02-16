---
permalink: /coteafs/appium/supported-device-actions/
title: "Supported Device Actions"
toc: true
---

There are plenty of device specific actions which are supported in the framework and to trigger that action on device, you need to call the `onDevice` method on the Current Activity class object. Same is illustrated below:

```java
    . . .
    login.onDevice ().hideKeyboard ();
    . . .
```

### Actions common for all the devices
Following is the list of actions common on all the devices:
* `captureScreenshot`: Captures current activity screenshot and saves the file at path specified in config file. File name will have the prefix defined in the config file.
* `hideKeyboard`: This will hide the currently displayed keyboard. This doesn't work on iOS due to some issue in Appium.
* `navigateTo`: This is specific to web app testing on device.
* `pinch`: This will zoom out of the current activity by specified distance from center of the screen to the device screen borders.
* `swipe`: This method will swipe in the specified direction and by specified distance from center of the screen to the device screen borders.
* `zoom`: This will zoom in to the current activity by specified distance from center of the screen to the device screen borders.

### Swipe Directions available
1. `RIGHT`
1. `LEFT`
1. `UP`
1. `DOWN`

### Swipe distance from center to border available
1. `QUARTER`
1. `HALF`
1. `THREE_QUARTER`
1. `FULL`

### Android specific actions
* `currentActivity`: Gets the name of current activity.
* `handlePermissionAlert`: Handles Android permission alert by tapping on specified `Allow` or `Deny` buttons.
* `isLocked`: Returns boolean value by checking if the device is locked or no.
* `lock`: This will lock the device.
* `pressBack`: This will press the back button on the device.
* `unlock`: This will unlock the device.

### iOS specific actions
* `handleAlert`: This will handle pop-up Alert and returns the message.
* `hideKeyboard`: This will hide the keyboard by using specified strategy and key name.
* `shake`: This will shake the device.
