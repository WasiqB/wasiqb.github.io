---
title: Device Settings
permalink: "/projects/appium/device-setting/"
---

## General Device Settings

Following is the device config list:

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`name` | All | | Name of the device.
`type` | All | `REAL`, `SIMULATOR` | Device type.
`os` | All | `ANDROID`, `IOS`, `WINDOWS` | Platform type.
`version` | All | | Platform version.
`language` | All | `FRANCE`, `JAPAN`, `UK`, `US` | Device language
`automation` | All | `APPIUM`, `UIAUTOMATOR2`, `ESPRESSO`, `XCUI` | Automation used.
`cloud_capabilities` | All | | Cloud specific capabilities
`headless` | All | Boolean | Run device in headless mode
`browser` | All | `CHROME`, `CHROMIUM`, `SAFARI` | Browser supported
`session_timeout` | All | Int | New command timeout value.
`playback` | All | NA | See [playback section][playback] below for details
`android` | Android | NA | See [android section][android] below for details
`ios` | iOS | NA | See [ios section][ios] below for details
`launch_timeout` | IOS | Long | Delay in ms.
`auto_web_view` | All | Boolean | Enable automatic web view
`others` | All | NA | See [others section][others] below

### Android device settings

Key | Allowed Values | Description
----|----------------|------------
`adb` | ADB object | See [ADB section][adb] below for details
`app` | App object | See [App section][android-app] below for details
`avd` | AVD object | See [AVD section][avd] below for details
`web` | Web object | See [Web section][android-web] below for details
`disable_animation` | Boolean | To disable animation on device
`skip_device_init` | Boolean | Skip device initialization
`skip_server_install` | Boolean | Skip server installation
`skip_unlock` | Boolean | Skip device unlock
`unlock_type` | `FINGERPRINT`, `PASSWORD`, `PATTERN`, `PIN` | Unlock type for device
`unlock_key` | String | Key to unlock device

#### ADB settings

Key | Allowed Values | Description
----|----------------|------------
`host` | String | ADB host address
`port` | Integer | ADB port number
`timeout` | Long | ADB execute timeout in milliseconds

#### Android App settings

Key | Allowed Values | Description
----|----------------|------------
`external` | Boolean | true, if app is external, false if app in resources folder
`type` | `HYBRID`, `NATIVE`, `WEB` | Type of Application
`path` | String | App path
`other_apps` | List of app path | List of apps to be installed along with main application
`grant_permission` | Boolean | Auto grant permission to application
`ignore_unimportant_views` | Boolean | Ignores hidden elements from DOM
`install_timeout` | Long | APK installation timeout in milliseconds
`no_stop_on_reset` | Boolean | Whether to stop application on session start / restart
`package_name` | String | Name of package
`activity_name` | String | Name of activity
`wait_package` | String | Name of package to wait
`wait_activity` | String | Name of activity to wait
`wait_timeout` | Long | Number of milliseconds to wait for activity / package

#### AVD settings

Key | Allowed Values | Description
----|----------------|------------
`name` | String | Name of virtual device
`launch_timeout` | Long | Number of milliseconds to wait for virtual device to launch
`ready_timeout` | Long | Number of milliseconds to wait for virtual device to be ready
`network_speed` | `GSM`, `SCSD`, `GPRS`, `EDGE`, `UMTS`, `HSDPA`, `LTE`, `EVDO`, `FULL` | Network speed of the device
`args` | String | Virtual Device arguments

#### Android Web settings

Key | Allowed Values | Description
----|----------------|------------
`accept_ssl_certs` | Boolean | Auto accept SSL certificate
`show_browser_logs` | Boolean | Show browser logs in console
`native_screenshot` | Boolean | Enable native screenshot
`chrome_driver_path` | String | Path to Chrome driver
`options` | Option object | See [Option section][android-web-options] below for details

##### Android Web options settings

> To be Added Soon

### iOS device settings

Key | Allowed Values | Description
----|----------------|------------
`app` | App object | See [App section][ios-app] below for details
`wda` | WDA object | See [WDA section][wda] below for details
`web` | Web object | See [Web section][ios-web] below for details
`auto_accept_alerts` | Boolean | Auto accept all alerts

#### iOS App settings

Key | Allowed Values | Description
----|----------------|------------
`external` | Boolean | true, if app is external, false if app in resources folder
`type` | `HYBRID`, `NATIVE`, `WEB` | Type of Application
`path` | String | App path
`bundle_id` | String | Application Bundle Id.
`launch_timeout` | Long | Delay in ms.

#### WDA settings

Key | Allowed Values | Description
----|----------------|------------
`agent_path` | String | WebDriverAgent project location.
`bootstrap_path` | String | WebDriverAgent xcode project file location.
`connection_timeout` | Long | WDA connection timeout value in milliseconds.
`team_id` | String | Apple Developer 10 char unique id.
`signing_id` | String | Hardcoded value `iPhone Developer`.
`update_bundle_id` | String | Bundle Id for which code is signed.
`use_new` | Boolean | true, will use new wda app everytime, else false.
`use_prebuilt` | Boolean | true, will not build and deploy wda app on device, else, false.
`local_port` | Integer | WDA port.
`startup_retries` | Integer | Retry times.
`startup_retry_interval` | Integer | Interval in secs between retires.

#### iOS web settings

Key | Allowed Values | Description
----|----------------|------------
`allow_popups` | Boolean | Allow javascript to open new windows in Safari
`console_logs` | Boolean | Show console logs in console
`initial_url` | String | Initial Safari URL
`native_taps` | Boolean | Allow native touch
`network_logs` | Boolean | Allow network logs

### Playback settings

Key | Allowed Values | Description
----|----------------|------------
`delay` | Delay object | See [Delay section][delay] below for details
`record` | Record object | See [Record section][record] below for details
`screenshot` | Screenshot object | See [Screenshot section][screenshot] below for details
`stream` | Stream object | See [Stream section][stream] below for details
`max_swipe_count` | Integer | Maximum number of swipe until element is displayed

#### Delay settings

Key | Allowed Values | Description
----|----------------|------------
`implicit` | Integer | Implicit wait in seconds
`explicit` | Integer | Explicit wait in seconds
`before_tap` | Long | Delay in secs before tap.
`after_tap` | Long | Delay in secs after tap.
`before_swipe` | Long | Delay in secs before swipe.
`after_swipe` | Long | Delay in secs after 

#### Video record settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`enabled` | Both | Boolean | If true, feature will be enabled
`path` | Both | String | Path for the video, Defaults to `/video` directory under your test project
`prefix` | Both | String | Prefix for the video file. Defaults `VID`
`time_limit` | Both | Integer | Time limit of the video
`android` | Android | Android object | See [Android video settings][android-video] below for details
`ios` | iOS | iOS object | See [iOS video settings][ios-video] below for details

##### Android Video settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`bit_rate` | Android | Integer | Bit rate for the recorded video. Defaults `4`
`size` | Android | String (Format: `WxH`) | Resolution of the video

##### iOS Video settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`codec` | iOS | String | The video codec type used for encoding of the recorded screen capture. Execute `ffmpeg -codecs` in the terminal to see the list of supported video codecs
`fps` | iOS | Integer | The Frames Per Second rate of the recorded video. Defaults to 10
`quality` | iOS | `LOW`, `MEDIUM`, `HIGH`, `PHOTO` | The video encoding quality (low, medium, high, photo - defaults to medium). Only works for real devices

#### Screenshot settings

Key | Allowed Values | Description
----|----------------|------------
`on_error` | Boolean | True, will capture screenshot on error
`path` | String | Path to the folder where screenshots will be stored
`prefix` | String | Prefix for the screenshot file name

#### Video stream settings

> Currently only supports Android platform

Key | Allowed Values | Description
----|----------------|------------
`enabled` | Boolean | True, will enable video streaming
`host` | String | Host address to stream video on
`port` | Integer | Port number to stream video on
`bit_rate` | Integer | Bit rate of stream
`quality` | `HD`, `HIGH`, `MEDIUM`, `LOW` | Streaming quality
`width` | Integer | Width of video
`height` | Integer | Height of video

### Other settings

Key | Allowed Values | Description
----|----------------|------------
`clear_files` | Boolean | Clear system files
`clear_logs` | Boolean | Clear logs
`full_reset` | Boolean | Full device reset
`no_reset` | Boolean | No device reset

[android]: #android-device-settings
[playback]: #playback-settings
[ios]: #ios-device-settings
[ios-web]: #ios-web-settings
[wda]: #wda-settings
[ios-app]: #ios-app-settings
[android-web-options]: #android-web-options-settings
[adb]: #adb-settings
[android-app]: #android-app-settings
[avd]: #avd-settings
[android-web]: #android-web-settings
[android-video]: #android-video-settings
[ios-video]: #ios-video-settings
[stream]: #video-stream-settings
[screenshot]: #screenshot-settings
[record]: #video-record-settings
[delay]: #delay-settings
[others]: #other-settings