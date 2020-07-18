---
permalink: /projects/selenium/remote-setting/
title: "Remote Setting"
toc: true
---

## Remote Config Lists - `selenium-config.yaml`

For running the tests in remote, i.e. on Browserstack or SauceLab platforms, following attributes are necessary to be updated
in the config file. String Interpolation "${pass}" can be used to wrap password in the remote setting.

### Remote config

Following are the attributes required to remote setting:

Key | Sample Value | Default Value |  Description
----|--------------|---------------|-----------|------------
`remote` |`NA` | `NA` | Remote specific setting - This is parent node. hence it is mandatory to put this tag.
`user_id` | `${CLOUD_USER}` | `${CLOUD_USER}` | User name - Cloud services. This is not required in case tests are running using Selenium grid.
`password` | `${CLOUD_KEY}` | `${CLOUD_KEY}` |  Pass key - Cloud services. This is not in case tests are running using Selenium grid.
`protocol` | `HTTP`, `HTTPS` | `HTTP` | Protocol required.

### Remote Capabilities list

Remote capabilities supported by this framework are listed below:

Key | Sample Value | Default Value | Description
----|--------------|---------------|------------
`capabilities` |`NA` | `NA` | `NA` | Remote capabilities setting - This is parent node. hence it is mandatory to put this tag.
`browser` | `chrome`, `firefox` | `chrome` | Remote browser name.
`browser_version` | `75.0` | `75.0` | Remote browser version.
`os` | `Window`, `linux`, `macOS` | `Windows` | OS name.
`os_version` | `Depends on OS set` | `Depends on OS set` | OS Version.
`name` | `NA` | `NA` | Give a meaningful name to your tests.

## Cloud Capabilities

Cloud capabilities supported by this framework are listed below:

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`seleniumVersion` | `3.141.59` | `3.141.59` |  Selenium Version to be used for running tests on cloud.
`name` | `NA` | `NA` | Give a meaningful name to your tests. e.g. Sauce-[Java] Sample Test
