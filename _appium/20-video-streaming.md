---
permalink: /projects/appium/video-streaming
title: Video streaming
---

## How to enable Video streaming

Video streaming is only supported on Android device and can be configured and enabled in the config as shown below.

```yaml
devices:
  android_device:
    . . .
    playback:
      stream:
        enabled: true
        . . .
```

## Video streaming setting

Following are the available options which can be configured for video streaming.

- `enabled`: `true` will enable the feature. To turn off, use `false`
- `host`: Host IP to stream video on, default is `127.0.0.1`
- `port`: Port on which to stream on, default `8093`.
- `width`: Screen width for streaming video, default `700`.
- `height`: Screen height for streaming video, default `1024`
- `quality`: Streaming quality, default is `HIGH`. Allowed values are `HD`, `HIGH`, `MEDIUM` and `LOW`.
- `bit_rate`: Stream mega bits per second, default is `50`