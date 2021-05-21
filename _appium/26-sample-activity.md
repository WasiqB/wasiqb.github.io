---
permalink: /projects/appium/sample-activity-class/
title: "Activity Class"
---

## Sample code for Activity Class

For each activity, an Activity class is required to be created by extending `AndroidActivity` (in case of `Android` platform) OR `IOSActivity` ( in case of iOS platform).

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