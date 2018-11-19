---
permalink: /coteafs/appium/battery/
title: "Battery Check"
toc: false
---

## Overview

Basic idea for this feature is to terminate the tests when Battery level on real device is less than 20% and device is connected to machine via WiFi. But when the device is connected to machine via USB than the check is skipped. This feature is available on real device for Android and iOS. For Android the check will be only available when Automation type is `UIAutomator2`.

### Error thrown

When battery level drops to 19%, `NotEnoughBatteryChargeError` is thrown. Same is also logged in logs.
