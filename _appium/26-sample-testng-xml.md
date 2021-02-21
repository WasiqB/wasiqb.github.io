---
title: Sample TestNG XML
permalink: "/projects/appium/sample-testng/"
---

## Sample TestNG.yaml

This is sample `testng.yaml` file for demonstration purpose.

```yaml
name: coteafs-appium Test Suite
listeners:
  - com.github.wasiqb.coteafs.listeners.ConfigListener
  - com.github.wasiqb.coteafs.listeners.SuiteListener
  - com.github.wasiqb.coteafs.listeners.TestListener
  - com.github.wasiqb.coteafs.listeners.ExecutionListener
  - com.github.wasiqb.coteafs.listeners.DataProviderListener
  - com.github.wasiqb.coteafs.listeners.AnnotationTransformer
  - com.github.wasiqb.coteafs.listeners.SuiteResultReporter
tests:
  - name: Android Test
    parameters: { server: browserstack, device: test_browserstack }
    classes:
      - name: com.github.wasiqb.coteafs.appium.android.VodQATest
        includedMethods:
          - testLogin
          - testLongPress
          - testNativeView
          - testSlider
          - testVerticleSwipe
          - testRotation
        excludedMethods:
          - testDragDrop

```
