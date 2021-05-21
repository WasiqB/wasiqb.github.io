---
permalink: /projects/appium/server-setting/
title: "Server Settings"
---

## Server Config Lists

Following is the supported server config lists,

Key | Default Value | Allowed Values | Description
----|---------------|----------------|------------
`protocol` | `HTTP` | `HTTP`, `HTTPS` | Protocol for the server
`host` | `null` | String | Host address
`port` | `4723` | `0` | Port Number
`external` | `false` | boolean value | `true`, if using external server run from terminal, else, if required for framework to start the server.
`appium_path` | `null` |  | Path to **main.js** file in Appium installation directory.
`node_path` | `null` |  | Path to Node executable.
`allow_insecure` | Empty list | List of String | See below for [allowed values][insecure]
`start_up_timeout` | 60 | Integer | Wait timeout for Server to start.
`session_override` | false |  | Override the session
`cloud` | `null` | `BROWSERSTACK` | Currently only supports BrowserStack
`user_name` | `null` |  | User name on the Cloud. This field is externalized to secure sensitive information.
`password` | `null` | null | Password on the Cloud. This field is externalized to secure sensitive information.
`logs` | Default logs options | | See [logs section][logs] below
`android` | NA | NA | Android platform specific settings. See [here][android] for complete list.
`ios` | NA | NA | iOS platform specific settings. See [here][ios] for complete list.
`environments` | Empty Map | Key, Value | This will contain all the environment variables which will be used by Appium.
`allow_cors` | | | Option to allow CORS
`callback_ip` | `null` | String | Callback IP address.
`callback_port` | `null` | Integer | Callback Port
`node_config` | `null` | String | Configuration JSON file path to register Appium with selenium grid.
`pre_launch` | | | Pre launches app before session starts
`relaxed_security` | | | Disables additional security
`strict_capabilities` | | | Fails Appium session if capabilities sent does not match with any device.

### Allowed insecure options

Key | Description | Platform
----|-------------|---------
`get_server_logs` | Allows retrieving of Appium server logs via the Webdriver log interface | All
`adb_shell` | Allows execution of arbitrary shell commands via ADB, using the `mobile: shell` command | Android
`shutdown_other_sims` | Allow any session to use a capability to shutdown any running simulators on the host | iOS
`perf_record` | Allow recording the system performance and other metrics of the simulator | iOS
`record_audio` | Allow recording of host machine audio inputs | iOS
`chromedriver_autodownload` | Allow to download ChromeDriver automatically if Appium does not have proper the version | Android
`execute_driver_script` | Allows to send a request which has multiple Appium commands | All

### Logs options

Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`level` | DEBUG, ERROR | ERROR | All | Log level for Server. See the list [below][logLevel] for complete list of allowed values.
`timestamp` | true, false | false | All | Show timestamps in console output
`local_timezone` | true, false | false | All | Use local timezone for timestamps
`no_colors` | true, false | false | All | Use console colors, if true, else false.
`debug_spacing` | true, false | false | All | Add extra spacing in logs for visual inspection
`path` | path\to\logs.log | | All | Appium server logs path
`async_trace` | true, false | false | All | Add long stack trace to logs

#### Supported Log Levels

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

### Android options

Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`bootstrap_port` | Int | | Android | Port to use on device to talk to Appium.
`chrome_driver_port` | Int | | Android | Port upon which ChromeDriver will run.
`chrome_driver_path` | Path for driver | | Android | ChromeDriver executable full path.
`suppress_adb_kill` | true, false | false | Android | If set, prevents Appium from killing the adb server instance.
`reboot` | true, false | false | Android | Reboot emulator after each session and kill it at the end

### iOS options

Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`backend_retries` | Int | 3 | IOS | How many times to retry launching Instruments before saying it crashed or timed out.
`ipa_path` | Path to ipa | | IOS | Absolute path to compiled .ipa file.
`safari` | true, false | false | IOS | Use the safari app.
`wkd_proxy_port` | Int | | IOS | Local port used for communication with ios-webkit-debug-proxy.
`wda_port` | 1234 | 0 | IOS | WebDriver Agent port number.
`default_device` | true, false | null | IOS | use the default simulator that instruments launches on its own

[logs]: #logs-options
[logLevel]: #supported-log-levels
[android]: #android-options
[ios]: #ios-options
[insecure]: #allowed-insecure-options