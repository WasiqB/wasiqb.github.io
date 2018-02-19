---
permalink: /coteafs/appium/sample-activity-class/
title: "Activity Class"
---

For each activity, we need to create an Activity class by extending `AndroidActivity` class if working on Android, or `IOSActivity` if working on IOS device, or `WindowsActivity` if working on Windows device.

```java
import org.openqa.selenium.By;

import com.github.wasiqb.coteafs.appium.android.AndroidActivity;
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;
import com.github.wasiqb.coteafs.appium.device.DeviceElement;

public class DashboardActivity extends AndroidActivity {
	public DashboardActivity (final AndroidDevice device) {
		super (device);
	}

        // You need to implement this protected method and return the root element.
	@Override
	protected DeviceElement prepare () {
                // This the root element as seen in Inspector.
		final DeviceElement main = DeviceElement.create ("Main")  // <- You can specify any name you want. This will be refered from our tests. It is case sensitive.
			.using (By.id ("android:id/content"));  // <- Specify the locator you identified using the inspector

                // This is the child element of main created above.
		DeviceElement.create ("HomeList")
			.parent (main)  // <- Specify the parent of this element.
			.using (By.id ("com.vinsol.expensetracker:id/home_listview"));
		DeviceElement.create ("Text")
			.parent (main)
                        .index (1)  // <- Specify the index where this element will be found. can be skipped if there is only 1 element with the specified locator.
			.using (By.id ("com.vinsol.expensetracker:id/home_text"));
		DeviceElement.create ("Favorites")
			.parent (main)
			.using (By.id ("com.vinsol.expensetracker:id/home_favorite"));
		DeviceElement.create ("Graph")
			.parent (main)
			.using (By.id ("com.vinsol.expensetracker:id/main_graph"));

		return main;
	}
}
```
