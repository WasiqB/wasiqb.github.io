---
permalink: /projects/appium/verification/
title: "Verification of Elements"
---

## Problem Statement

User has to write a lot more code to verify the expected with actual result and it requires good amount of effort and time to be invested in it.

## Solution by this Framework

Inline Assertions are provided by this framework.

Following is an example on how to do it.

```java
. . .
final DashboardActivity main = new DashboardActivity (this.device);
main.onElement ("TypedAmt")
	.verifyThat ()
	.textShouldBeEqualTo ("$0.1");
. . .
```

Following is the list of verification methods available:

Name | Description
-----|------------
`shouldBeDisabled` | Verifies if the element is disabled or not.
`shouldBeDisplayed` | Verifies if the element is displayed or not.
`shouldBeEnabled` | Verifies if the element is enabled or not.
`shouldNotBeDisplayed` | Verifies if the element is hidden or not.
`textShouldBeEqualTo` | Verifies if element text is equal to given string or not.
