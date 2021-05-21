---
permalink: /projects/appium/error-handling/
title: "Error Handling"
---

## Problem Statement

Tests are not running as expected, it is difficult to find out the root cause, appium related errors are thrown which are very difficult to be identified.

## Solution provided by this framework

This framework handles all the events and throws a meaningful error using [coteafs-error](https://github.com/WasiqB/coteafs-error) framework, which is easy to identify the cause of failure.

Following is the list of exception and their events of occurring:

Exception | Events
----------|-------
`AppiumConfigParameterNotFoundError` | When the config file is missing mandatory params.
`AppiumSelectorNotImplementedError` | When locator is invalid.
`AppiumServerAlreadyRunningError` | When Appium server is already running.
`AppiumServerLogFileError` | When there is error while deleting previous server logs.
`AppiumServerNotRunningError` | When Appium server is not running.
`AppiumServerNotStartingError` | When there is Error while starting the server.
`AppiumServerNotStoppingError` | When there is Error while stopping the server.
`AppiumServerStoppedError` | When trying to interact with device while Appium server is stopped.
`DeviceAppNotClosingError` | When there is Error while closing Device app.
`DeviceAppNotFoundError` | When device app is not found on local machine.
`DeviceDesiredCapabilitiesNotSetError` | When device mandatory desired capabilities is not set.
`DeviceDriverDefaultWaitError` | When there is Error while setting implicit waits.
`DeviceDriverInitializationFailedError` | When there is Error while initializing device driver.
`DeviceDriverNotStartingError` | When there is Error while starting device driver.
`DeviceDriverNotStoppingError` | When there is Error while quitting device driver.
`DeviceElementDisabledError` | When you are trying to interact with disabled element.
`DeviceElementFindTimedOutError` | When element is not ready within specified explicit delay given in config file.
`DeviceElementNameNotFoundError` | When element name is not found in Activity class.
`DeviceElementNotDisplayedError` | When you are trying to interact with element which is not yet displayed.
`DeviceElementNotFoundError` | When device element cannot be found.
`DeviceTypeNotSupportedError` | When the mentioned device type is not supported by the framework.
`NotEnoughBatteryChargeError` | When Battery charge is less than 20%.
