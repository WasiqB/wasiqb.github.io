---
permalink: /projects/appium/multi-language
title: Multi Language
---

## Supported languages

Languages are supported based on the country. Following are the countries which languages are supported by the framework.

- `US`: US English
- `UK`: UK English
- `FRANCE`: French
- `JAPAN`: Japanese

## Setting device language

The language for the device can be specified in the config as shown below.

```yaml
. . .
devices:
  android_device:
    os: ANDROID
    type: REAL
    language: US  # Allowed, US, UK, JAPAN, FRANCE
    . . .
```