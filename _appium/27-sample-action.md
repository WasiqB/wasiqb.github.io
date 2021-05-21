---
permalink: /projects/appium/sample-action-class/
title: "Action Class"
---

## Sample code for Action Class

For avoiding duplication of code and writing the same action flow multiple times, Action flow can be written in a separate Action Class as shown below:

```java
import com.github.wasiqb.coteafs.appium.android.AndroidActivityActions;
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;
import com.github.wasiqb.coteafs.appium.android.vodqa.activities.LoginActivity;

public class LoginActivityAction extends AndroidActivityActions {
  public LoginActivityAction (final AndroidDevice device) {
    super (device);
  }

  @Override
  public void perform () {
    final LoginActivity login = new LoginActivity (getDevice ());
    login.onElement ("UserName")
      .enterText (value ("UserName"));
    login.onElement ("Password")
      .enterText (value ("Password"));
    login.onDevice ()
      .hideKeyboard ();
    login.onElement ("Login")
      .tap ();
  }
}
```