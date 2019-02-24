---
title: "Beginners guide to setup Appium Automation for Android"
header:
  overlay_color: "#5e616c"
  overlay_filter: "0.5"
  overlay_image: /assets/images/posts/appium_android_java_logo.png
excerpt: I just completed setting up my Mac for Appium and wanted to share my findings with all. Unlike Windows, the steps to setting up Mac machine for iOS devices is not that easy. We will see the complete steps required in order to get us ready for iOS testing with Appium on Mac OS X.
categories:
  - Mobile Automation
tags:
  - Appium
  - Appium Android
date: 2017-04-13
last_modified_at: 2017-04-13
device_list:
  - url: /assets/images/posts/xcode-device-manager.png
    image_path: /assets/images/posts/xcode-device-manager.png
    alt: Device list
    title: List of devices and simulators
xcode_general:
  - url: /assets/images/posts/xcode-general-1.png
    image_path: /assets/images/posts/xcode-general-1.png
    alt: Xcode General screen
    title: XCode General setting screen
xcode_auto_sign:
  - url: /assets/images/posts/xcode-general-auto-sign.png
    image_path: /assets/images/posts/xcode-general-auto-sign.png
    alt: XCode General Auto sign screen
    title: XCode General Auto sign screen
xcode_auto_sign_team:
  - url: /assets/images/posts/xcode-general-sign-team.png
    image_path: /assets/images/posts/xcode-general-sign-team.png
    alt: XCode Auto sign team setting screen
    title: XCode Auto sign team setting screen
xcode_sign_error:
  - url: /assets/images/posts/xcode-general-sign.png
    image_path: /assets/images/posts/xcode-general-sign.png
    alt: XCode Auto sign error screen
    title: XCode Auto sign error screen
xcode_build:
  - url: /assets/images/posts/xcode-build.png
    image_path: /assets/images/posts/xcode-build.png
    alt: XCode Build screen
    title: XCode Build screen
xcode_sign_pass:
  - url: /assets/images/posts/xcode-general.png
    image_path: /assets/images/posts/xcode-general.png
    alt: XCode Auto sign succeeded
    title: XCode Auto sign succeeded
ios_trust_dev:
  - url: /assets/images/posts/trust-dev.png
    image_path: /assets/images/posts/trust-dev.png
    alt: iOS Trust developer screen
    title: iOS Trust developer screen
ios_trust_confirm:
  - url: /assets/images/posts/trust-page.png
    image_path: /assets/images/posts/trust-page.png
    alt: iOS trust developer confirmation dialog
    title: iOS trust developer confirmation dialog
---

# Introduction

Firstly, I'm very excited in writing my first and definitely not the last blog. I am associated with Automation testing for more than a decade and I had done Automation for Desktop, Web and API based applications but never on Mobile. When recently I was assigned the task to implement Mobile Automation, I thought that it would be beneficial to all if I can compile a step by step guide for the same.

You may ask, why to write "yet another blog for Appium", as you can find many resources online. My answer is that they are all scattered, some concentrate only on Mac environment and some only on Windows, whereas some concentrate on Android and some on iOS. That's the reason I thought to get all the findings in a single place.

This is the first installment in the series, which will concentrate in setting up Appium on your windows environment.

# What you can expect in later series?

After you complete all the series of this tutorial, you will be able to

* Install Appium and it's required dependencies
* Setup the environment for Mobile Automation on Windows and Mac OS X
* Configure actual Android and iOS device for Automated testing
* Configure virtual Android and iOS devices for Automated testing
* Use Appium Inspector to locate Mobile elements for Android and iOS
* Use UIAutomatorViewer to locate Mobile elements for Android and iOS
* Execute First Tests on actual devices
* Execute First Tests on emulators
* Automate gesture like tap, swipe, multi touch, etc
* Find locators of web applications on Mobile devices via remote debugging
* Test native, hybrid and web mobile apps

# What is Appium?

There are many open source Mobile Automation frameworks available but I would recommend Appium, since it is an extension of Selenium WebDriver and would be easy to learn as many of us already know Selenium WebDriver.

# What you will need for Appium?

Below is the basic list of tool's which is needed for Windows environment. You need to download all the tools mentioned in the table below. Installation is very user friendly and I don't see the need to give explanation of each of the tools, hence, I will be skipping this going forward

Tools	Version	Download Link
Java	8	Download
Android Studio	2.3.1	Download
Eclipse Neon IDE	4.6.3	Download
NodeJS	6.10.2	Download
PdaNet	4.19	Download
Appium Desktop	1.6.4	Download

# How to setup Appium on Windows machine?

I'm assuming that all the tools you have installed already. If any tool is not yet installed, I will suggest you to do that before proceeding further.

## Add Library path to Environment Variables and PATHS variable

To set Environment variables on Windows, you need to right click on Computer icon on desktop and click on Properties



A window like this will open, now click on Advanced system settings.



This dialog box will open, now click on Environment Variables button.



When you click on the button, a window like shown above should open.

In that window, under System variables section, you need to create or modify the following Environment variables

|| Variable Name ||	New / Edit ||	Variable Value
||---------------||------------||---------------
| `JAVA_HOME` |	New |	JDK root path
| `ANDROID_HOME` | New | SDK root path
| `PATH` | Edit |	`%ANDROID_HOME%\platform-tools`
| `PATH` | Edit |	`%ANDROID_HOME%\tools`
| `PATH` | Edit |	`%JAVA_HOME%\bin`

## Checking Appium setup with Appium Doctor

There is a very handy tool which will analyze our system and check if the setup for Android is done as expected or no. If there is any problem with the setup it will instantly highlight and if possible will also fix the issue itself. This tool is called the Appium-Doctor. Let us install this.

Run this command in the command prompt.

$ npm install -g appium-doctor

This is shown below



Once it is installed successfully, you will see screen as shown below.



Now we need to run below command to check if the system is properly setup for Android Automation.

$ appium-doctor --android


This message will be displayed when all is setup properly. But if anything is not setup or missed, it will highlight the same as shown below.

## Installing Appium using Node

Before proceeding further, make sure you have installed NodeJS setup. If you have not installed Appium for windows mentioned earlier, it's alright, since we will use that only for Appium Inspector. To install Appium on our machine, we just need to execute Node JS command. This will automatically download Appium and all it's dependencies. This is the recommended approach instead of downloading the Windows installer.

## Step 1

Open command prompt, and execute the command npm install -g appium, and hit Enter.



When command starts executing, you should see something as shown above.



Later on in installation, it will also install it's dependencies, as you can see above.



Once, installation is done successfully, you will see something like in above screenshot.

## Step 2

Check the version to confirm if installation is proper or no. To check this, run the command appium -v. If all is well until now, you should see the version of appium installed.



### Starting Appium server using command line

In order to run our tests, we need Appium server to be running. It will act as a hub and we can run our tests on the device or emulators using the service URL. To start Appium server, execute command appium, and hit Enter.



Window as shown above should appear indicating the server is up and running. One thing to note here is that we can also configure and run Appium server programmatically which we will see later on.

Stopping Appium server using command line
To stop the server is very simple, just hit Ctrl + C. When prompted for confirmation hit y and Enter.


# Conclusion

Congratulations!! You have your windows configured and your machine is now ready to run Mobile Automation tests for Android platform. Stay tuned for the next post, where we will look into configuring our Android device and emulators so that we can run our Automation Tests on it.

If you find this post useful, than share it with your network. If you have any questions or suggestion or feedback, you can share it with me in the comments section below.

[ios]: /blogs/appium-automation-ios
