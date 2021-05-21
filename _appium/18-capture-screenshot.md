---
permalink: /projects/appium/screenshot/
title: "Capture Screenshots"
---

## A. Capturing Screenshots manually.

coteafs-appium has a feature of taking screenshots of any Activity which is being worked upon as and when required. Following is the code snippet of how to do it:

```java
. . .
final LoginActivity login = new LoginActivity (this.iosDevice);
login.onDevice ().captureScreenshot ();
. . .
```

* The screenshot will be saved at the path, if specified in the config file, else on the root path of the project under folder `screenshots`.
* The name of the file can also be prefixed, if specified in config file. If not provided, file will have the prefix as `SCR`.
* File name contains date time stamp in format `ddMMyyyy-HHmmss`. E.g. `<path>/<prefix>-<datetime>.jpeg`.

## B. capturing screenshot automatically when an error is occurred.

coteafs-appium also takes care of capturing screenshot automatically. It can be enabled from following
path in config file :
`config file >> device settings >> playback block` by setting `screensho_on_error` property to `true`.
