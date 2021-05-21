---
title: Supported Device Actions
permalink: "/projects/appium/supported-device-actions/"
---

## Overview

There are plenty of platform specific actions which are supported in the framework and to trigger that action on device, you need to call the `onDevice` method on the Current Activity class object. Same is illustrated below:

```java
  . . .
  login.onDevice ().hideKeyboard ();
  . . .
```

## Actions common for all the devices

Following is the list of actions common on all the devices:
- `captureScreenshot`: Captures current activity screenshot and saves the file at path specified in config file. File name will have the prefix defined in the config file.
- `navigateTo`: This is specific to web app testing on device.
- `rotate`: Rotate the device to Landscape or Portrait mode.
- `rotation`: Gets current rotation mode.
- `pinch`: This will zoom out of the current activity by specified distance from center of the screen to the device screen borders.
- `pullFile`: This method will pull file from device storage to local machine.
- `pullFolder`: This method will pull complete folder from device storage to local machine.
- `swipe`: This method will swipe in the specified direction and by specified distance from specified starting position on the screen.
- `zoom`: This will zoom in to the current activity by specified distance from center of the screen to the device screen borders.

> Caution: Zoom and Pinch on Android will only work when Automation name is `ESPRESSO`.

## Swipe Directions available

1. `RIGHT`
1. `LEFT`
1. `UP`
1. `DOWN`

## Swipe start positions

1. `RIGHT`
1. `LEFT`
1. `UP`
1. `DOWN`
1. `CENTER`

## Android specific actions

- `currentActivity`: Gets the name of current activity.
- `clipboard`: Gets and sets clipboard text from device. Or for specified type like IMAGE, URL, TEXT.
- `handlePermissionAlert`: Handles Android permission alert by tapping on specified `Allow` or `Deny` buttons.
- `handleAlert`: Handles pop-up Alerts.
- `hideKeyboard`: This will hide the currently displayed keyboard.
- `isLocked`: Returns boolean value by checking if the device is locked or no.
- `lock`: This will lock the device.
- `longPressKey`: This will long press the specified key on the device.
- `pressKey`: This will press the specified key on the device.
- `pushFile`: This method will push file from local machine to device storage.
- `toggleAirplane`: This will toggle ON/OFF Airplane mode.
- `toggleData`: This will toggle ON/OFF Mobile data.
- `toggleLocation`: This will toggle ON/OFF Location services.
- `toggleWifi`: This will toggle ON/OFF Wifi.
- `unlock`: This will unlock the device.

> Note for clipboard:
> When getting clipboard for type other than TEXT, it will be returned as Base64 encoded which will currently require you to decode at your end to use it. Decoding will be done later on in the framework.

## iOS specific actions

- `clipboard`: Gets clipboard text from device. Or for specified type like IMAGE, URL, TEXT.
- `handleAlert`: This will handle pop-up Alert and returns the message.
- `hideKeyboard`: This will hide the keyboard by using specified strategy and key name.
- `shake`: This will shake the device.
- `pushFile`: This method will push file from local machine to device storage.