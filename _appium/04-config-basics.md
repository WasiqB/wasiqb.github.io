---
title: Basic Config structure
permalink: "/projects/appium/config-basics/"
---

## Overview

Config file is the heart of this framework. It is supported by [coteafs-datasource][config] framework which supports yaml file format parsing. This config file will contain all the settings needed for your tests. The framework will try to find the file with file name `appium-config.yaml` under `src/test/resources` directory. If this file is not found in that location as well, then it will throw `CoteafsConfigFileNotFoundError`.

## Points to remember

- Config file should be always inside `src/test/resources` folder of your project.
- Config file name should be `appium-config` and can be any of the following formats:
	- `yaml`
	- `yml`
	- `json`
	- `xml`
	- `properties`
- Whichever key is defined (_in coming sections_) as `key-value` pair can have any casing key.
- Spelling of the key should be same as provided in it's individual sections.

## Secret values interpolation

Config file supports using of variables to hide sensitive values. Variables are enclosed in curly brackets, e.g. `${variables}`. Following are the supported variable formats.

Input type | Variable sample
-----------|----------------
Base64 Decoder | `${base64Decoder:SGVsbG9Xb3JsZCE=}`
Base64 Encoder | `${base64Encoder:HelloWorld!}`
Java Constant | `${const:java.awt.event.KeyEvent.VK_ESCAPE}`
Date | `${date:yyyy-MM-dd}`
DNS | `${dns:address|apache.org}`
Environment Variable | `${env:USERNAME}`
File Content | `${file:UTF-8:src/test/resources/document.properties}`
Java | `${java:version}`
Localhost | `${localhost:canonical-name}`
Properties File | `${properties:src/test/resources/document.properties::mykey}`
Resource Bundle | `${resourceBundle:org.example.testResourceBundleLookup:mykey}`
Script | `${script:javascript:3 + 4}`
System Property | `${sys:user.dir}`
URL Decoder | `${urlDecoder:Hello%20World%21}`
URL Encoder | `${urlEncoder:Hello World!}`
URL Content (HTTP) | `${url:UTF-8:http://www.apache.org}`
URL Content (HTTPS) | `${url:UTF-8:https://www.apache.org}`
URL Content (File) | `${url:UTF-8:file:///${sys:user.dir}/src/test/resources/document.properties}`
XML XPath | `${xml:src/test/resources/document.xml:/root/path/to/node}`

## Config structure

Config file structure is of the following structure:

```yaml
servers:
  server_1:
    . . .
  server_2:
    . . .

devices:
  device_1:
    . . .
  device_2:
    . . .
```

To know more about each configuration section, see the documentation at,

- [Server configuration][server]
- [Device configuration][device]

[config]: https://github.com/WasiqB/coteafs-datasource
[server]: /projects/appium/server-setting/
[device]: /projects/appium/device-setting/
