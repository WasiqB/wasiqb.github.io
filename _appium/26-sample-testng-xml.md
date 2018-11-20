---
permalink: /coteafs/appium/sample-testng/
title: "Sample TestNG XML"
---

This is sample TestNG XML file just for demonstration.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="coteafs-appium Test Suite" preserve-order="true">
  <test name="Android Test">
    <parameter name="server" value="android" />
    <parameter name="device" value="test_local" />
    <classes>
      <class name="com.github.wasiqb.coteafs.appium.android.VodQATest">
        <methods>
          <include name="testLogin" />
        </methods>
      </class>
    </classes>
  </test>
</suite>
```
