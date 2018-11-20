---
permalink: /coteafs/appium/sample-test-class/
title: "Test Class"
---

Now we can move to writing our first Test class by extending the base test class created earlier. You can write the Test as you may wish. This example is for demonstration purpose only.

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
