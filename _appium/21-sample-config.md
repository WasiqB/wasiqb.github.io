---
permalink: /projects/appium/sample-config/
title: "Config file"
---

## Sample Config File

Config file is main resource of this framework where all the necesary config setup for servers and devices
are done.
For naming convention of the file, refer the details mentioned [here](/coteafs/appium/config-basics/).

```yaml
# Common server block.
server: &default_server
  appium_js_path: C:\Users\wasiqb\AppData\Roaming\npm\node_modules\appium\build\lib\main.js
  node_path: C:\Program Files\nodejs\node.exe
  arguments:
    log_level: DEBUG
    log_time_stamp: true
    local_time_zone: true
    session_override: true
    android:
      suppress_adb_kill_server: true

# Main servers list block with list of servers.
servers:
  android:
    host: 0.0.0.0
    port: 4723
    <<: *default_server # refer common block here in this server.
  browserstack:
    protocol: HTTPS
    host: hub-cloud.browserstack.com
    cloud: true
    user_name: ${env.user} # System property placeholder.
    password: ${env.pass} # System property placeholder.

# Common device block with common settings.
device: &default_device
  platform_type: ANDROID
  app_type: HYBRID
  device_type: REAL
  session_timeout: 120000
  clear_system_files: true
  no_reset: false
  full_reset: true
  playback:
    record:
      enabled: true
    delay_before_swipe: 200
    delay_after_swipe: 100
    delay_before_tap: 0
    delay_after_tap: 0

# Main device array block with multiple devices.
devices:
  test_local:
    device_name: pixel2
    device_version: 8.1
    app_location: apps/android/VodQA.apk
    automation_name: APPIUM
    <<: *default_device # refer common device setting block here.
    device_type: SIMULATOR
    android:
      avd: pixel2
      avd_launch_timeout: 60000
      avd_ready_timeout: 60000
  test_browserstack:
    device_name: Samsung Galaxy S8
    device_version: 7.0
    app_location: ${env.app} # System property placeholder.
    cloud_app: true
    automation_name: APPIUM
    <<: *default_device
```
