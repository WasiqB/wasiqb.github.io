---
title: Logging
permalink: "/projects/appium/logging/"
---

## Problem Statement

Many a time it happens that user is not able to identify which statement of code is running or where it gets stuck and he has to run the tests again in debug mode to make it clear.

## Solution provided by this framework

This framework supports logging of low level events by using Log4j2. You can configure log4j2 config to turn on the logging.

Following is the sample output you'll get when logging is turned on.

```shell_script
[21:25:58.889] [INFO ] - Preparing to perform actions on iOS device element UserName... (IOSActivity:)
[21:25:58.903] [INFO ] - Loading elements on iOS activity... (DeviceActivity:)
[21:26:03.472] [INFO ] - Clearing element [UserName]... (DeviceElementActions:)
[21:26:05.509] [INFO ] - Entering text [User1] in element [UserName]... (DeviceElementActions:)
[21:26:07.148] [INFO ] - Preparing to perform actions on iOS device element Password... (IOSActivity:)
[21:26:12.372] [INFO ] - Clearing element [Password]... (DeviceElementActions:)
[21:26:14.491] [INFO ] - Entering text [Pass@123] in element [Password]... (DeviceElementActions:)
[21:26:15.985] [INFO ] - Preparing to perform actions on iOS device element Go... (IOSActivity:)
[21:26:23.432] [INFO ] - Tapping on element [Go]... (DeviceElementActions:)
```

## Sample coteafs-logger config file

Following is the sample content of the `log4j2.yaml` which is used by the framework while executing it's tests.

The content of the `src/main/resources/log4j2.yaml` is as follows:

```yaml
Configuration:
  status: warn
  name: Default
  monitorInterval: 30

  properties:
    property:
      - name: log-path
        value: logs
      - name: error-log
        value: coteafs-appium-log-error
      - name: all-log
        value: coteafs-appium-log-all
      - name: test-log
        value: coteafs-appium-log-main
      - name: log-pattern
        value: "[%d{HH:mm:ss.SSS}] [%-5level] - %msg (%logger{1}:%L) %throwable{short.message}%n"

  appenders:
    Console:
      name: "console-log"
      target: SYSTEM_OUT
      PatternLayout:
        pattern: ${log-pattern}
    RollingFile:
      - name: "all-log-appender"
        fileName: ${log-path}/${all-log}.log
        filePattern: ${log-path}/${all-log}-%d{yyyy-MM-dd}.log
        append: false
        immediateFlush: true
        PatternLayout:
          pattern: ${log-pattern}
        Policies:
          TimeBasedTriggeringPolicy:
            interval: 1
            modulate: true
          SizeBasedTriggeringPolicy:
            size: 5MB
      - name: "test-log-appender"
        fileName: ${log-path}/${test-log}.log
        filePattern: ${log-path}/${test-log}-%d{yyyy-MM-dd}.log
        append: false
        immediateFlush: true
        PatternLayout:
          pattern: ${log-pattern}
        Policies:
          TimeBasedTriggeringPolicy:
            interval: 1
            modulate: true
          SizeBasedTriggeringPolicy:
            size: 5MB
      - name: "error-log-appender"
        fileName: ${log-path}/${error-log}.log
        filePattern: ${log-path}/${error-log}-%d{yyyy-MM-dd}.log
        append: false
        immediateFlush: true
        PatternLayout:
          pattern: ${log-pattern}
        Policies:
          TimeBasedTriggeringPolicy:
            interval: 1
            modulate: true
          SizeBasedTriggeringPolicy:
            size: 5MB
    Async:
      name: async
      AppenderRef:
        ref: "test-log-appender"

  Loggers:
    Root:
      level: all
      AppenderRef:
        - ref: "console-log"
          level: debug
        - ref: "async"
          level: info
        - ref: "all-log-appender"
          level: trace
        - ref: "error-log-appender"
          level: error
```
