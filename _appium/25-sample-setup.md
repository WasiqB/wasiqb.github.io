---
permalink: /projects/appium/sample-setup-class/
title: "Setup Class"
---

## Sample code for Setup Class

Once the config file is ready, Setup Base Class can be created as shown below.

```java
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;

import com.github.wasiqb.coteafs.appium.service.AppiumServer;

public class DefaultTest {
  protected AndroidDevice androidDevice;
  private AppiumServer androidServer;

  @BeforeMethod
  public void setupMethod () {
    this.androidDevice.startRecording ();
  }

  @Parameters ({ "server", "device" })
  @BeforeTest
  public void setupTest (final String server, final String device) {
    this.androidServer = new AppiumServer (server);
    this.androidServer.start ();

    this.androidDevice = new AndroidDevice (this.androidServer, device);
    this.androidDevice.start ();
  }

  @AfterMethod
  public void teardownMethod () {
    this.androidDevice.stopRecording ();
  }

  @AfterTest
  public void tearDownTest () {
    this.androidDevice.stop ();
    this.androidServer.stop ();
  }
}
```