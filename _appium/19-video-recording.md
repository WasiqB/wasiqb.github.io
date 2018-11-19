---
permalink: /coteafs/appium/video/
title: "Video Recording"
toc: true
---

## Enable Recording

Now you can video record your tests on Android and iOS.
To enable recording, following changes needs to be done in config file under devices block:

```yaml
. . .
devices:
  . . .
  playback:
    record:
      enabled: true
  . . .
```

## Record Settings

We can customize the video recording settings as required. Following are the parameters which can be manipulated,

### Android
- `bit_rate`: The video bit rate for the video, in megabits per second. Default is 4.
- `size`: The video size of the generated media file. The format is `WIDTHxHEIGHT`.

### iOS
- `quality`: The video encoding quality (LOW, MEDIUM, HIGH, PHOTO - defaults to medium). Only works for real devices.
