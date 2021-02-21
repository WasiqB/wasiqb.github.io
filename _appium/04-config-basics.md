---
title: Configuration Basics
permalink: "/projects/appium/config-basics/"
toc: false
---

## Overview

Config file is the heart of this framework. It is supported by [coteafs-datasource][config] framework which supports yaml file format parsing. This config file will contain all the settings needed for your tests. The framework will try to find the file with file name `appium-config.yaml` under `src/test/resources` directory. If this file is not found in that location as well, then it will throw `CoteafsConfigFileNotFoundError`.

## Important points to remember when writing the config file

- Config file should be always inside `src/test/resources` folder of your project.
- Confile file name should be `appium-config` and can be of any of the following formats:
	- `yaml`
	- `yml`
	- `json`
	- `xml`
	- `properties`
- Whichever key is defined (_in coming sections_) as key-value pair can have any casing key.
- Spelling of the key should be same as provided in it's individual sections.
- All the keys in the config file should be as defined in the section [Server Setting][server] and [Device Setting][device].

[config]: https://github.com/WasiqB/coteafs-datasource
[server]: /projects/appium/server-setting/
[device]: /projects/appium/device-setting/
