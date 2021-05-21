---
permalink: /projects/appium/battery/
title: "Battery Check"
---

## Overview

Basic idea for this feature is to terminate the tests when Battery level on real device is less than `20%` and device is connected to machine via WiFi.

But when the device is connected to machine via USB than this check is skipped.

This feature is available on real device for Android and iOS.

> Note: For Android, this check will be only available when Automation type is `UIAutomator2`.

## Error handling message for battery check

When battery level drops to 19%, `NotEnoughBatteryChargeError` customized error is thrown. Same is also logged in logs.
