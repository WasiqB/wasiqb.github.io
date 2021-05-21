---
permalink: /projects/appium/alerts/
title: "Alert Handling"
---

## Problem Statement

Alert handling in mobile automation is a very tedious task, whether it be Mobile, Tablet, Android or iOS. Many users waste good amount of time finding the solutions for it.

## Solution provided by this Framework

This is very elegantly handled in the framework. Following is the code snippet of how to use it:

## Android Permission Alert

```java
. . .
final LoginActivity login = new LoginActivity (this.androidDevice);
String message = login.onDevice ().handlePermissionAlert("Allow");
System.out.println (message);
. . .
```

## Android and iOS pop-up Alert

```java
. . .
final LoginActivity login = new LoginActivity (this.iosDevice);
String message = login.onDevice ().handleAlert();
System.out.println (message);
. . .
```

> NOTE:
Currently Appium only supports iOS native Alerts, hence, same is handled explicitly for Android in coteafs-appium.
