---
permalink: /coteafs/appium/sample-config/
title: "Config file"
---

Here we can configure all the required servers and devices. For naming the file, refer the details about this mentioned [here](/coteafs/appium/config-basics/).

```yaml
servers:	# should not be changed.
  android:  	# Can be any text, it will be used to refer configs in tests.
    ip: 127.0.0.1
    port: 4723
  iphone:	# Can be any text, it will be used to refer configs in tests.
    ip: 127.0.0.1
    port: 4724
    external: true
  ipad:		# Can be any text, it will be used to refer configs in tests.
    ip: 127.0.0.1
    port: 4725
    external: true

devices:	# Should not change.
  android:	# Can be any text, it will be used to refer configs in tests.
    platform_type: ANDROID
    device_type: REAL
    device_name: Mi4
    device_version: 6.0.1
    app_type: HYBRID
    automation_name: APPIUM
    app_location: app/android/your_app.apk
    app_package: com.company.package
    app_activity: com.company.activity.MainActivity
    app_wait_activity: com.company.activity.SplashActivity
    session_timeout: 6000
    clear_system_files: true
  iphone:	# Can be any text, it will be used to refer configs in tests.
    platform_type: IOS
    device_name: iPhone X
    device_version: 11.0
    udid: XXXX
    bundle_id: com.company.app
    app_type: HYBRID
    app_location: app/iphone/your_app.ipa
    automation_name: XCUI
    app_name: [Your App Name]
    team_id: XXXXXXXXXX
    signing_id: iPhone Developer
    bootstrap_path: /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent
    agent_path: /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent/WebDriverAgent.xcodeproj
    session_timeout: 6000
  ipad:		# Can be any text, it will be used to refer configs in tests.
    platform_type: IOS
    device_name: iPad Mini 4
    device_version: 10.3.1
    udid: XXXX
    bundle_id: com.company.app
    app_type: NATIVE
    app_location: app/ipad/your_app.ipa
    automation_name: XCUI
    app_name: [Your App Name]
    team_id: XXXXXXXXXX
    signing_id: iPhone Developer
    bootstrap_path: /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent
    agent_path: /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent/WebDriverAgent.xcodeproj
    session_timeout: 6000
    wda_connection_timeout: 6000
    full_reset: true
    clear_system_files: true
```
