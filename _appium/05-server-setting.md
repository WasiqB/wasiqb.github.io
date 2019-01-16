---
permalink: /projects/appium/server-setting/
title: "Server Settings"
toc: true
---

## Server Config Lists

### Server config list when external flag is ON

When you want to connect to already running Appium server, following is the required settings,

Key | Sample Value | Default Value | Description
----|--------------|---------------|------------
`protocol` | HTTP, HTTPS | HTTP | Protocol for the server
`host` | 127.0.0.1 | null | IP Address
`port` | 4723 | 0 | Port Number
`external` | true | false | true, if using external server run from terminal, else, if required for framework to start the server.

### Server Config list when external flag is OFF

When you want the framework to start the server for you while test execution, use the following settings,

Key | Sample Value | Default Value | Mandatory | Description
----|--------------|---------------|-----------|------------
`protocol` | HTTP, HTTPS | HTTP | Protocol for the server
`host` | 127.0.0.1 | null | Yes | IP Address
`port` | 4723 | 0 | No | Port Number. If not specified, any free port will be used.
`start_up_time_out_seconds` | 60 | 60 | No | Wait timeout for Server to start.
`session_timeout` | 120 | 120 | No | New command timeout value.
`appium_js_path` | path\to\appiumJS | null | No | Path to **main.js** file in appium installation directory.
`node_path` | path\to\node_exe | null | No | Path to Node executable.
`no_reset` | true | false | No | true, if app reset is not required, else, can be omitted.
`full_reset` | true | false | No | true, if full reset of app is required, else, can be omitted.
`environment_variables` | Key, Value | Empty Map | No | This will contain all the environment variables which will be used by Appium.
`log_file_path` | Path for server log file | logs/server-[Instance ID].log | No | Complete path for Server log file.
`arguments` | See below Table for available values | | No | Server Arguments.

### Server config list when cloud flag is ON

When you want to connect to cloud platform like BrowserStack, use following settings,

Key | Sample Value | Default Value | Description
----|--------------|---------------|------------
`protocol` | HTTP, HTTPS | HTTP | Protocol for the server
`host` | 127.0.0.1 | null | Cloud host name excluding https and port (if any).
`port` | 4723 | 0 | Cloud server Port Number
`cloud` | true | false | true, if using Cloud based server.
`user_name` | ${USER} | null | User name on the Cloud. This field is externalized to secure sensitive information.
`password` | ${PASS} | null | Password on the Cloud. This field is externalized to secure sensitive information.

Here, sensitive fields are allowed to have placeholders instead of actual value. To replace placeholders with actual values, you can pass them as `System properties`.

## Server Arguments List

Following are the server argument lists which can be manipulated when `external` and `cloud` flag is OFF.

Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`android` | NA | NA | Android | Android device specific settings. See [here][android] for complete list.
`ios` | NA | NA | iOS | iOS device specific settings. See [here][ios] for complete list.
`log_level` | DEBUG, ERROR | ERROR | All | Log level for Server. See the list [below][logLevel] for complete list of allowed values.
`session_override` | true, false | false | All | Override the session
`log_timestamp` | true, false | false | All | Show timestamps in console output
`local_time_zone` | true, false | false | All | Use local timezone for timestamps
`node_config_file` | Grid Config file path | | All | Configuration JSON file to register Appium with selenium grid.
`callback_ip` | String | | All | Callback IP address.
`callback_port` | Int | | All | Callback Port

## Android Server Arguments List

If extra customization is required for Android platform, use following arguments,

Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`bootstrap_port` | Int | | Android | Port to use on device to talk to Appium.
`chrome_driver_port` | Int | | Android | Port upon which ChromeDriver will run.
`chrome_driver_exe_path` | Path for driver | | Android | ChromeDriver executable full path.
`suppress_adb_kill_server` | true, false | false | Android | If set, prevents Appium from killing the adb server instance.

## iOS Server Arguments List

If extra customization is required for iOS platform, use following arguments,

Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`backend_retries` | Int | 3 | IOS | How many times to retry launching Instruments before saying it crashed or timed out.
`ipa_absolute_path` | Path to ipa | | IOS | Absolute path to compiled .ipa file.
`safari` | true, false | false | IOS | Use the safari app.
`webkit_debug_proxy_port` | Int | | IOS | Local port used for communication with ios-webkit-debug-proxy.
`wda_port` | 1234 | 0 | IOS | WebDriver Agent port number.

## Supported Log Levels

* `DEBUG`
* `DEBUG_DEBUG`
* `DEBUG_ERROR`
* `DEBUG_INFO`
* `DEBUG_WARN`
* `ERROR`
* `ERROR_DEBUG`
* `ERROR_ERROR`
* `ERROR_INFO`
* `ERROR_WARN`
* `INFO`
* `INFO_DEBUG`
* `INFO_ERROR`
* `INFO_INFO`
* `INFO_WARN`
* `WARN`
* `WARN_DEBUG`
* `WARN_ERROR`
* `WARN_INFO`
* `WARN_WARN`

[logLevel]: #supported-log-levels
[android]: #android-server-arguments-list
[ios]: #ios-server-arguments-list
