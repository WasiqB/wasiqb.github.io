---
permalink: /projects/appium/keyboard/
title: "Keyboard Handling"
---

This is an added feature in the framework where you can `hide` the keyboard when you are done with typing.
Also, provisions are also made to press `enter key` / press `back key`.
This is feature is introduced for Android as well as iOS.

Following is the code snippet of how to do it:

## Android

```java
. . .
final LoginActivity login = new LoginActivity (this.androidDevice);
login.onDevice ().hideKeyboard ();
. . .
```

## iOS

```java
. . .
final LoginActivity login = new LoginActivity (this.iosDevice);
login.onDevice ().hideKeyboard (HideKeyboardStrategy.PRESS_KEY, "return");
. . .
```
