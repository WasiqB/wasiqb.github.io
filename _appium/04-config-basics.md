---
permalink: /coteafs/appium/config-basics/
title: "Configuration Basics"
toc: true
---

Config file is the heart of this framework. It is supported by [coteafs-configs][config] framework which supports yaml file format parsing. This config file will contain all the settings needed for your tests. The framework will try to find System property `coteafs.appium.config` which will have the path of the config file. If it is not specified, by default, it will search the file at `appium-config.yaml` under `src/test/resources` directory. If this file is not found in that location as well, then it will throw `CoteafsConfigFileNotFoundError`.

### Important points to remember when writing the config file

* Config file should be always inside `src/test/resources` folder.
* If the config file name is not same as the default file name mentioned above, the path should be specified in `coteafs.appium.config` System property and **it should always start with `/` file path separator**.
* All the keys in the config file should be as defined in the coming section.
* Whichever key is described as key-value pair can have any casing key.
* Spelling of the key should be same as provided in it's individual sections which is given below.

[config]: https://github.com/WasiqB/coteafs-config
