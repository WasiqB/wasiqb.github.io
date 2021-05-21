---
permalink: /projects/appium/action-class/
title: "Abstract Activity Action Class"
---

## Background

Let's take an example of LoginActivity provided in previous topic of [Abstract Activity Class][deviceActivity]. If say there are multiple tests to be written, where Login activity is used for logging in different types of user's, it will be unnecessary code duplication of Login flow actions. In order to avoid such scenario's, a device specific abstract class is available which extends `DeviceActivityActions` class, and simplifies the tedious task.

Following are the list of available actions classes for each type of platforms:

* `AndroidActivityActions`
* `IOSActivityActions`

Whenever the above mentioned classes are extended, `perform` method needs to be overridden by adding the Activity specific flow actions. If in case, some input values are required to be used in Activity flow, than `addInputValue` method can be used to add input values in key-value format. Now to get the input values in the `perform` method, `value` method needs to be called by passing corresponding key for the input field for which value is required.

## How to write an Activity Action class?

Lets take example of Login Activity a bit further and assume platform is `Android`

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

## How to use Activity Actions in Tests?

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

## Other methods exposed by ActivityActions class are:

 Method Name | Description
-------------|------------
`getDevice` | While return the currently used device instance
`addInputValue` | Add input value by specifying the element name as key for corresponding Element.
`value` | Will return the input value specified in our Tests

[deviceActivity]: /projects/appium/activity-class/
