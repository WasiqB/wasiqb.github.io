---
permalink: /coteafs/appium/server-setting/
title: "Server Settings"
toc: true
---

### Server Config Lists
Following is the server config list when **external** flag is ON:

Key | Sample Value | Default Value | Description
----|--------------|---------------|------------
`ip` | 127.0.0.1 | null | IP Address
`port` | 4723 | 0 | Port Number
`external` | true | false | true, if using external server run from terminal, else, if required for framework to start the server.

Following is the Server Config list when **external** flag is OFF:

Key | Sample Value | Default Value | Mandatory | Description
----|--------------|---------------|-----------|------------
`ip` | 127.0.0.1 | null | Yes | IP Address
`port` | 4723 | 0 | No | Port Number. If not specified, any free port will be used.
`start_up_time_out_seconds` | 60 | 60 | No | Wait timeout for Server to start.
`session_timeout` | 120 | 120 | No | New command timeout value.
`appium_js_path` | path\to\appiumJS | null | No | Path to **main.js** file in appium installation directory.
`no_reset` | true | false | No | true, if app reset is not required, else, can be omitted.
`full_reset` | true | false | No | true, if full reset of app is required, else, can be omitted.
`environment_variables` | Key, Value | Empty Map | No | This will contain all the environment variables which will be used by Appium.
`log_file_path` | Path for server log file | logs/server-[Instance ID].log | No | Complete path for Server log file.
`arguments` | See below Table for available values | | No | Server Arguments.

### Server Arguments List
Key | Sample Value | Default Value | Device | Description
----|--------------|---------------|--------|------------
`log_level` | DEBUG, ERROR | ERROR | All | Log level for Server. See the list [below][logLevel] for complete list of allowed values.
`session_override` | true, false | false | All | Override the session
`backend_retries` | Int | 3 | IOS | How many times to retry launching Instruments before saying it crashed or timed out.
`bootstrap_port` | Int | | Android | Port to use on device to talk to Appium.
`chrome_driver_port` | Int | | Android | Port upon which ChromeDriver will run.
`chrome_driver_exe_path` | Path for driver | | Android | ChromeDriver executable full path.
`ipa_absolute_path` | Path to ipa | | IOS | Absolute path to compiled .ipa file.
`log_timestamp` | true, false | false | All | Show timestamps in console output
`local_timezone` | true, false | false | All | Use local timezone for timestamps
`node_config_file` | Grid Config file path | | All | Configuration JSON file to register Appium with selenium grid.
`safari` | true, false | false | IOS | Use the safari app.
`suppress_adb_kill_server` | true, false | false | Android | If set, prevents Appium from killing the adb server instance.
`webkit_debug_proxy_port` | Int | | IOS | Local port used for communication with ios-webkit-debug-proxy.
`callback_ip` | String | | Android | Callback IP address.
`callback_port` | Int | | Android | Callback Port

### Supported Log Levels
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

[logLevel]: https://github.com/WasiqB/coteafs-appium/wiki/Supported-Server-Settings#supported-log-levels
