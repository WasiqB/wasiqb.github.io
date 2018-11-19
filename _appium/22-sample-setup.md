---
permalink: /coteafs/appium/sample-setup-class/
title: "Setup Class"
---

After our config file is ready, we can move on and write our Setup Base Class as shown below.
```java
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import com.github.wasiqb.coteafs.appium.service.AppiumServer;

public class DefaultTest {
	protected AndroidDevice	androidDevice;
	private AppiumServer	androidServer;

        // This is how you can setup the test.
	@BeforeSuite (alwaysRun = true)
	public void setupTestSuite () {
                // Initializing the server for the device by specifying the name given in config file.
		this.androidServer = new AppiumServer ("android");
                // If external = true, will check if external server is running or no, if not running
		// will throw an exception.
		// If external = false, it will start the server on runtime.
		this.androidServer.start ();

                // This will initialize the device only.
		this.androidDevice = new AndroidDevice (this.androidServer, "test");
		// This will connect to the server and launch the app on connected device.
		this.androidDevice.start ();
	}

	// This is how you will teardown the test.
	@AfterSuite (alwaysRun = true)
	public void tearDownTestSuite () {
		if (this.server != null && this.device != null) {
			// Thsi will close the app and quit the device.
			this.androidDevice.stop ();
			// If external = false, this will stop the server, else will do nothing.
			this.androidServer.stop ();
		}
	}
}
```
