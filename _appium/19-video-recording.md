---
permalink: /projects/appium/video/
title: "Video Recording of tests"
---

### How to Enable Recording

coteafs-appium supports the video recording of tests for Android as well as iOS.

To enable recording, following changes needs to be done in config file inside the devices block:

```yaml
. . .
devices:
  . . .
  playback:
    record:
      enabled: true
  . . .
```

### Video Record Settings

coteafs-appium also supports the customization of video recording settings. Following are the parameters which can be changed as per the requirement:

### Android

- `bit_rate`: The video bit rate for the video, in megabits per second. Default is `4`.
- `size`: The video size of the generated media file. The format is `WIDTHxHEIGHT`.

### iOS

- `quality`: The video encoding quality (`LOW`, `MEDIUM`, `HIGH`, `PHOTO` - defaults to medium). This option currently works for real devices Only.
