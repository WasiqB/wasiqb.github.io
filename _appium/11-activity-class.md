---
permalink: /projects/appium/activity-class/
title: "Abstract Activity Class"
---

To introduce Page object flavor in tests, Abstract Activity classes are available for each type of supported platforms which can be used to create pages for each Activity under test. The available Abstract classes are listed below:

* `AndroidActivity`
* `IOSActivity`

## How to write an activity?

Here is an example of activity class for Android device and the activity is `LoginActivity`.

```java
import org.openqa.selenium.By;

import com.github.wasiqb.coteafs.appium.android.AndroidActivity;
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;
import com.github.wasiqb.coteafs.appium.device.DeviceElement;

public class LoginActivity extends AndroidActivity {
  public LoginActivity (final AndroidDevice device) {
    super (device);
  }

  // Here protected abstract method needs to be implemented which should return the root element.
  @Override
  protected DeviceElement prepare () {
    final DeviceElement main = DeviceElement.create ("Main")
      .waitStrategy (WaitStrategy.VISIBLE)
      .forAndroid (By.id ("android:id/content"));
    DeviceElement.create ("Back")
      .parent (main)
      .forAndroid (By.xpath ("//android.widget.TextView[@text=\"Back\"]"))
      .forAndroid (AutomationType.UIAUTOMATOR2, MobileBy.AndroidUIAutomator ("new UiSelector ().text (\"Back\");"));
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

This is how `DeviceElement` object is created using abstract method `prepare`, where object will be root object which will have user interactive elements as it's child. To know more about DeviceElement, [see here][deviceElement].

[deviceElement]: /projects/appium/orp/
