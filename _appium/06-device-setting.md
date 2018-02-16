---
permalink: /coteafs/appium/device-setting/
title: "Device Settings"
toc: true
---

Following is the device config list:

Key | Platform | Allowed Values | Description
----|----------|----------------|------------
`device_name` | Both | | Name of the device.
`device_type` | Both | REAL, SIMULATOR | Device type.
`platform_type` | Both | ANDROID, IOS, WINDOWS | Platform type.
`device_version` | Both | | Platform version.
`automation_name` | Both | APPIUM, XCUI | Automation used.
`app_name` | IOS | | Application Name
`app_type` | Both | HYBRID, NATIVE, WEB | Application Type.
`app_package` | Android | | Application Package Name.
`app_location` | Both | | Local path to Application apk or ipa file.
`external_app` | Both | true, false | false, if app resides in `src/test/resources` folder, otherwise, true.
`app_activity` | Android | | Loading activity name.
`app_wait_activity` | Android | | Activity name to wait for to load.
`clear_system_files` | Both | true, false | true, will clear all the files after driver quit, else, false.
`default_wait` | Both | Int | Implicit wait.
`wait_for_element_until` | Both | Int | Explicit wait.
`bundle_id` | IOS | | Application Bundle Id.
`udid` | IOS | | Device UDID.
`team_id` | IOS | | Apple Developer 10 char unique id.
`signing_id` | IOS | iPhone Developer | Hardcoded value.
`agent_path` | IOS | | WebDriverAgent project location.
`bootstrap_path` | IOS | | WebDriverAgent xcode project file location.
`updated_wda_bundle_id` | IOS | | Bundle Id for which code is signed.
`use_new_wda` | IOS | true, false | true, will use new wda app everytime, else false.
`use_prebuilt_wda` | IOS | true, false | true, will not build and deploy wda app on device, else, false.
`wda_connection_timeout` | IOS | Int | WDA connection timeout value.
`session_timeout` | Both | Int | New command timeout value.
`no_reset` | Both | false | true, if app reset is not required, else, can be omitted.
`full_reset` | Both | false | true, if full reset of app is required, else, can be omitted.
`avd` | Android | AVD Name | Android Virtual Device Name
`avd_launch_timeout` | Android | Int | AVD launch timeout in sec.
`avd_ready_timeout` | Android | Int | AVD ready timeout in sec.
`browser` | Both | BROWSER, CHROME, CHROMIUM, SAFARI | When running web tests.
`delay_before_tap` | Both | Int | Delay in secs before tap.
`delay_after_tap` | Both | Int | Delay in secs after tap.
`delay_before_swipe` | Both | Int | Delay in secs before swipe.
`delay_after_swipe` | Both | Int | Delay in secs after swipe.
`screen_shot_path` | Both | String | Path to the folder where screenshots will be stored.
`screen_shot_prefix` | Both | String | Prefix for the screenshot file name.
