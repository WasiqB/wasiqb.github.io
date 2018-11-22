---
permalink: /coteafs/appium/device-setting/
title: "Device Settings"
toc: true
---

Following is the device config list:

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`device_name` | All | | Name of the device.
`device_type` | All | REAL, SIMULATOR | Device type.
`platform_type` | All | ANDROID, IOS, WINDOWS | Platform type.
`device_version` | All | | Platform version.
`automation_name` | All | APPIUM, UIAUTOMATOR2, ESPRESSO, XCUI | Automation used.
`app_type` | All | HYBRID, NATIVE, WEB | Application Type.
`android` | Android | NA | Android device specific settings. See [here][android].
`ios` | iOS | NA | iOS device specific settings. See [here][ios].
`playback` | All | NA | Playback specific settings. See [here][playback].
`event_timings` | All | true, false | Event Timings.
`app_location` | All | | Local path to Application apk or ipa file or Cloud URL for App when Cloud App flag is ON.
`external_app` | All | true, false | false, if app resides in `src/test/resources` folder, otherwise, true.
`cloud_app` | All | true, false | true, if app is located on cloud.
`clear_system_files` | All | true, false | true, will clear all the files after driver quit, else, false.
`session_timeout` | All | Int | New command timeout value.
`no_reset` | All | false | true, if app reset is not required, else, can be omitted.
`full_reset` | All | false | true, if full reset of app is required, else, can be omitted.
`browser` | All | BROWSER, CHROME, CHROMIUM, SAFARI | When running web tests.
`udid` | All | | Device UDID.
`key_typing_delay` | All | Int | Delay in ms for typing.

### Android device settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`app_package` | Android | | Application Package Name.
`app_activity` | Android | | Loading activity name.
`app_wait_activity` | Android | | Activity name to wait for to load.
`app_wait_package` | Android | | Package name to wait for to load.
`avd` | Android | AVD Name | Android Virtual Device Name
`avd_launch_timeout` | Android | Int | AVD launch timeout in sec.
`avd_ready_timeout` | Android | Int | AVD ready timeout in sec.
`adb_port` | Android | Int | ADB port.
`apk_install_timeout` | Android | Int | Delay in secs.
`app_wait_timeout` | Android | Int | Delay in secs.
`auto_grant_permissions` | Android | Boolean | True, will grant permission automatically.
`chrome_driver_path` | Android | String | Path to chrome driver.
`device_ready_timeout` | Android | Int | Delay in secs.
`system_port` | Android | Int | System port.

### iOS device settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`app_name` | IOS | | Application Name
`bundle_id` | IOS | | Application Bundle Id.
`team_id` | IOS | | Apple Developer 10 char unique id.
`signing_id` | IOS | iPhone Developer | Hardcoded value.
`agent_path` | IOS | | WebDriverAgent project location.
`bootstrap_path` | IOS | | WebDriverAgent xcode project file location.
`updated_wda_bundle_id` | IOS | | Bundle Id for which code is signed.
`use_new_wda` | IOS | true, false | true, will use new wda app everytime, else false.
`use_prebuilt_wda` | IOS | true, false | true, will not build and deploy wda app on device, else, false.
`wda_connection_timeout` | IOS | Int | WDA connection timeout value.
`auto_accept_alerts` | IOS | Boolean | Auto accept all alerts.
`auto_dismiss_alerts` | IOS | Boolean | Auto dismiss all alerts.
`launch_timeout` | IOS | Long | Delay in ms.
`show_xcode_log` | IOS | Boolean | True will show XCode logs.
`wda_local_port` | IOS | Int | WDA port.
`wda_startup_retries` | IOS | Int | Retry times.
`wda_startup_retry_interval` | IOS | Int | Interval in secs between retires.

### Playback settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`default_wait` | Both | Int | Implicit wait.
`wait_for_element_until` | Both | Int | Explicit wait.
`delay_before_tap` | Both | Int | Delay in secs before tap.
`delay_after_tap` | Both | Int | Delay in secs after tap.
`delay_before_swipe` | Both | Int | Delay in secs before swipe.
`delay_after_swipe` | Both | Int | Delay in secs after swipe.
`screensho_on_error` | Both | Boolean | True, will capture screenshot on error.
`screen_shot_path` | Both | String | Path to the folder where screenshots will be stored.
`screen_shot_prefix` | Both | String | Prefix for the screenshot file name.
`record` | Both | Boolean | If true, video recording feature will be enabled.

### Record Settings

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`bit_rate` | Android | Int | Bit rate for the recorded video. Defaults `4`.
`duration` | Both | Int | Time limit of the video. Max limit for `Android: 3 mins, iOS: 10 mins`
`enabled` | Both | Boolean | If true, feature will be enabled.
`path` | Both | String | Path for the video, Defaults to `/video` directory under your test project.
`prefix` | Both | String | Prefix for the video file. Defaults `VID`.
`quality` | iOS | LOW, MEDIUM, HIGH, PHOTO | Video Quality. Defaults `MEDIUM`.
`size` | Android | String (Format: WIDTHxHEIGHT) | Resolution of the video.

[android]: #android-device-settings
[playback]: #playback-settings
[ios]: #ios-device-settings
