---
permalink: /coteafs/appium/screenshot/
title: "Capture Screenshots"
toc: true
---

### A. Manual screenshot capture.
Framework allows you to take screenshots of any Activity which you are working on whenever you need. Following is the code snippet for the same.

```java
. . .
final LoginActivity login = new LoginActivity (this.iosDevice);
login.onDevice ().captureScreenshot ();
. . .
```

* It will save the screenshot at the path, if specified in the config file, else on the root path of your project under folder `screenshots`.
* The name of the file can also be prefixed, if specified in config file. If not provided, file will have the prefix as `SCR`.
* File name will contain date time stamp in format `ddMMyyyy-HHmmss`. E.g. `<path>/<prefix>-<datetime>.jpeg`.

### B. Auto screenshot capture when Error.

> TODO...
