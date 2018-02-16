---
permalink: /coteafs/appium/activity-class/
title: "Abstract Activity Class"
toc: true
---


To introduce Page object flavor in our tests, we have Abstract Activity classes at your disposal for each type of supported devices which you can use to create pages for each Activity under test. The available Abstract classes are listed below:

* `AndroidActivity`
* `IOSActivity`
* `WindowsActivity`

### How to write an Activity?
I will demonstrate the use of DeviceActivity by assuming that we are working on Android Device and the Activity is LoginActivity.

```java
import org.openqa.selenium.By;

import com.github.wasiqb.coteafs.appium.android.AndroidActivity;
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;
import com.github.wasiqb.coteafs.appium.device.DeviceElement;

public class LoginActivity extends AndroidActivity {
	public LoginActivity (final AndroidDevice device) {
		super (device);
	}

  // You need to implement this protected method and return the root element.
	@Override
	protected DeviceElement prepare () {
		final DeviceElement main = DeviceElement.create ("Main")
			.using (By.id ("android:id/content"));
		DeviceElement.create ("UserName")
			.parent (main)
			.using (By.id ("userName"));
		DeviceElement.create ("Password")
			.parent (main)
			.using (By.id ("password"));
		DeviceElement.create ("Login")
			.parent (main)
			.using (By.id ("btnLogin"));
		return main;
	}
}
```

As we can see, we need to create a `DeviceElement` object in `prepare` method which is an abstract method where the object will be a root object which will have user interactive elements as it's child. To know more about DeviceElement, [see here][deviceElement].

[deviceElement]: /coteafs/appium/orp/
