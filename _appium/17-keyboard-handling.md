---
permalink: /coteafs/appium/keyboard/
title: "Keyboard Handling"
toc: true
---

This is also another feature where you can just hide the keyboard when you are done with typing. Following is the code snippet for the same.

### Android

```java
. . .
final LoginActivity login = new LoginActivity (this.androidDevice);
login.onDevice ().hideKeyboard ();
. . .
```

### List of keyboard events available
* `hideKeyboard ()`
* `pressBack ()`
* `pressEnter ()`
