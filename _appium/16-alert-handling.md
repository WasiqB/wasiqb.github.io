---
permalink: /coteafs/appium/alerts/
title: "Alert Handling"
toc: true
---

This is very commonly encountered when we test Mobile or Tablet devices of Android and iOS platform. It is very elegantly handled in the framework. Following is the code snippet to use it:

### Android Permission Alert

```java
. . .
final LoginActivity login = new LoginActivity (this.androidDevice);
String message = login.onDevice ().handlePermissionAlert("Allow");
System.out.println (message);
. . .
```

### Android and iOS pop-up Alert

```java
. . .
final LoginActivity login = new LoginActivity (this.iosDevice);
String message = login.onDevice ().handleAlert();
System.out.println (message);
. . .
```

> NOTE:
Currently Appium only supports iOS native Alerts, hence, same is handled explicitly for Android in coteafs-appium.
