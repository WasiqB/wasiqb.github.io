---
permalink: /coteafs/appium/verification/
title: "Verification of Elements"
toc: true
---

It is possible to do assertion on any device element without writing any assertion ourself. This is handled in the framework where you can do assertion on any Element inline. Following is an example on how to do it.

```java
. . .
final DashboardActivity main = new DashboardActivity (this.device);
main.onElement ("TypedAmt")
	.verifyThat ()
	.textShouldBeEqualTo ("$0.1");
. . .
```
**Neat and clean, isn't it??**

Following is the list of verification methods available:

Name | Description
-----|------------
`shouldBeDisabled` | Verifies if the element is disabled or not.
`shouldBeDisplayed` | Verifies if the element is displayed or not.
`shouldBeEnabled` | Verifies if the element is enabled or not.
`shouldNotBeDisplayed` | Verifies if the element is hidden or not.
`textShouldBeEqualTo` | Verifies if element text is equal to gievn string or not.
