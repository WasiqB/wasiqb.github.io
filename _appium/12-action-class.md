---
permalink: /coteafs/appium/action-class/
title: "Abstract Activity Action Class"
toc: true
---

### Background

Let's take an example of LoginActivity we saw in previous topic of [Abstract Activity Class][deviceActivity]. If say we have to write 100's of tests where Login activity is used for logging in different types of user's, it will be unnecessary code duplication of Login flow actions. In order to avoid such scenario's, we have provided a device specific abstract classes which extends `DeviceActivityActions` class.

Following are the list of available actions classes for each type of devices:
* `AndroidActivityActions`
* `IOSActivityActions`

Whenever we use above mentioned classes and extend it, we need to override `perform` method by adding the Activity specific flow actions. If we want to use some input values in our Activity flow, we can make use of `addInputValue` method to add input values in key-value format. Now to get the input values in the `perform` method which we will be implementing, we can call `value` method by passing corresponding key for the input field we want that value against.

### How to write an Activity Action class?

I will demonstrate this by assuming Android as our platform and Login Activity.

```java
import com.github.wasiqb.coteafs.appium.android.AndroidActivityActions;
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;

public class LoginActivityActions extends AndroidActivityActions {
  public LoginActivityActions (final AndroidDevice device) {
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

### How to use Activity Actions in Tests?

Here I've illustrated the use in the Tests class.
```java
. . .
@Test (dataProvider = "loginDataProvider")
public void testLogin (final String user, final String password) {
  final LoginActivityActions login = new LoginActivityActions (this.androidDevice);
  login.addInputValue ("UserName", user)
    .addInputValue ("Password", password)
    .perform ();
}
. . .
```

### Other methods exposed by ActivityActions class are:

 Method Name | Description
-------------|------------
`getDevice` | While return the currently used device instance
`addInputValue` | Add input value by specifying the element name as key for corresponding Element.
`value` | Will return the input value specified in our Tests

[deviceActivity]: /coteafs/appium/activity-class/
