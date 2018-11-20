---
permalink: /coteafs/appium/sample-activity-class/
title: "Activity Class"
---

For each activity, we need to create an Activity class by extending `AndroidActivity` class if working on Android, or `IOSActivity` if working on IOS device, or `WindowsActivity` if working on Windows device.

```java
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;
import com.github.wasiqb.coteafs.appium.device.DeviceElement;

import io.appium.java_client.MobileBy;

public class LoginActivity extends DefaultActivity {
  public LoginActivity (final AndroidDevice device) {
    super (device);
  }

  @Override
  protected DeviceElement prepare () {
    final DeviceElement main = super.prepare ();
    DeviceElement.create ("UserName")
      .forAndroid (MobileBy.AccessibilityId ("username"))
      .parent (main);
    DeviceElement.create ("Password")
      .forAndroid (MobileBy.AccessibilityId ("password"))
      .parent (main);
    DeviceElement.create ("Login")
      .forAndroid (MobileBy.AccessibilityId ("login"))
      .parent (main);
    return main;
  }
}
```
