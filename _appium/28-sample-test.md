---
title: Test Class
permalink: "/projects/appium/sample-test-class/"
---

## Sample code for Tests

Once the coding for Setup, activity and action class is completed, writing tests can be started with by extending the base test class created earlier in Setup.

Check the following demo code of tests:

```java
import org.testng.annotations.Test;

import com.github.wasiqb.coteafs.appium.android.vodqa.actions.LoginActivityAction;

public class VodQATest extends DefaultTest {
  @Test
  public void testLogin () {
    final LoginActivityAction login = new LoginActivityAction (this.androidDevice);
    login.addInputValue ("UserName", "admin")
      .addInputValue ("Password", "admin")
      .perform ();
  }
}
```