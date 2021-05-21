---
permalink: /projects/appium/clipboard-handling
title: Clipboard handling
---

## Getting device clipboard

You can get Clipboard data from Android and iOS device by using following method call.

```java
  // Get clipboard text
  String clipboardText = activity.onDevice ().clipboard ();

  // OR, get specific type of clipboard data
  // This method will return Base64 encoded string
  // So when you want to use this content, you must 
  // decode this Base64 string.
  String clipboardContent = activity.onDevice ().clipboard (ClipboardType.IMAGE);
```

## Setting Clipboard on device

There is also an option available to set clipboard data on device. Following are the methods which can be used,

```java
  // set clipboard text.
  activity.onDevice ().clipboard ("Hello, how are you?");
  
  // set clipboard URL.
  activity.onDevice ().clipboard (new URL("https://www.google.com"));
  
  // Set Image to clipboard.
  BufferedImage image = ImageIO.read (new File("image-path"));
  activity.onDevice ().clipboard (image);
```

## Supported Clipboard types

- `ClipboardType.IMAGE`
- `ClipboardType.TEXT`
- `ClipboardType.URL`