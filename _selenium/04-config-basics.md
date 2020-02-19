---
permalink: /projects/selenium/config-basics/
title: "Configuration Basics"
toc: false
---

## Overview

Config file is the heart of this framework. It is supported by [coteafs-configs][config] framework which supports yaml file format parsing. This config file will contain all the settings needed for your tests. The framework will try to find System property `coteafs.selenium.config` which will have the path of the config file. If it is not specified, by default, it will search the file with file name as `selenium-config.yaml` under `src/test/resources` directory. If this file is not found in that location as well, then it will throw `CoteafsConfigFileNotFoundError`.

## Important points to remember when writing the config file

* Config file should be always inside `src/test/resources` folder of your project.
* If the config file name is not same as the default file name mentioned above, then the path should be specified in `coteafs.selenium.config` System property and **it should always start with `/` file path separator**.
* Whichever key is defined (_in coming sections_) as key-value pair can have any casing key.
* Spelling of the key should be same as provided in it's individual sections.
* All the keys in the config file should be as defined in the section [Local Setting][local] and [Remote Setting][remote].

[config]: https://github.com/WasiqB/coteafs-config
[local]: /projects/selenium/local-setting/
[remote]: /projects/selenium/remote-setting/
