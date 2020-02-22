---
permalink: /projects/selenium/local-setting/
title: "Local Setting"
toc: true
---

## Local Config Lists - `selenium-config.yaml`

### Browser config

Following are the attributes required to browser setting

Key | Sample Value | Default Value | Mandatory | Description
----|--------------|---------------|-----------|------------
`browser` | `CHROME, SAFARI, EDGE, FIREFOX, IE.` | `CHROME` | `Yes` | Specifies tests will run in which browser.
`url` | `http://demourl.com` | `null` | `Yes` | Application URL under test.
`headless_mode` | `false` | `false` | `No` | true, for running tests in headless_mode, else, false.

### Driver config list

Following are the attributes required for driver setting

Key | Sample Value | Default Value | Mandatory | Description
----|--------------|---------------|------------
`driver` | `NA` | `NA` | `Yes`| Driver manager specific settings - This is parent node, hence it is mandatory to put this tag.
`force_cache` | `false/true` | `false` | `Yes` | Forces to use cache driver.
`force_download` | `false/true` | `false` | `Yes`| Forces to download driver each time.
`path` | `/driver/` | `null` | `Yes` |Local path where drivers will searched for.
`version` | `2.14` | `null` | `Yes` | Version of driver.
`exe_url` | `https://driver/download/url` | `null` | `Yes` | Driver download url.

## Playback, Recording, Delays and Screenshot List

### Playback Settings

Following are the attributes required for Playback setting

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`playback` | NA | NA |  Playback settings - This is the parent node, hence it is mandatory to put this tag.
`screen_state` | `FULL_SCREEN`, `NORMAL`, `MAXIMIZED` | `NORMAL` | Browser screen state when tests are run.
`highlight` | `true`, `false` | `true` | This setting is used to highlight the element where the cursor focuses in test run.

### Screen Resolution Settings

Following are the attributes related to screen resolution:

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`screen_resolution:`| `NA` | `NA` | This is parent node for screen screen_resolution setting, hence it is required to put this tag.
`width` | `1280` | `1280` | The width of the screen.
`height` | `768` | `768` | The height of the screen.


### Video Recording Settings
Following are the attributes related to screen resolution:

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`recording`| `NA` | `NA` | This is parent node for recording setting, hence it is required to put this tag.
`path` |`./video` | `./video` | Path where the video recording needs to be saved.
`prefix` | `VID`| `VID` | Video file prefix.

### Delay setting
Following are the attributes related to waits/delay:

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`delays:` | `NA` | `NA` | This is parent node for delay setting, hence it is required to put this tag.
`implicit` | `60` | `60` | Implicit waits in seconds.
`explicit` | `60` | `60` | Explicit waits in seconds.
`after_frame_switch` | `500` | `500` | Delay after iFrame switch in milliseconds.
`after_window_switch` | `500` | `500` | Delay after Window switch in milliseconds.
`before_key_press` | `0` | `0` |  Delay before key press in milliseconds.
`after_key_press` | `0` | `0` |  Delay after key press in milliseconds.
`before_mouse_move` | `0` | `0` | Delay before mouse move in milliseconds.
`after_mouse_move` | `0` | `0` |  Delay after mouse move in milliseconds.
`before_click` | `0` | `0` | Delay before mouse click in milliseconds.
`after_click` | `0` | `0` |  Delay after mouse click in milliseconds.
`page_load` | `60` | `60` | Page load timeout in seconds
`script_load` | `60` | `60` | Script load timeout in seconds
`highlight` | `500` | `500` | Highlight delay in milliseconds


### Screenshot setting
Following are the attributes related to Screenshots Capture:

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`screenshot:` | `NA` | `NA` | This is parent node for delay setting, hence it is required to put this tag.
`path` | `~/screenshots` | `~/screenshots` |  The path where you want the screenshots to be stored.
`prefix` | `SCR` | `SCR` | Screenshot filename prefix.
`extension` | `jpeg` | `jpeg` | Screenshot file extension
`capture_on_error` | `false`,`true` | `false` | This setting specifies whether to capture Screenshot on error or not.
`capture_all` | `true`, `false` | `true` | This setting will capture screenshots on each event, when true.


### Custom parameters in Config

Custom Param like login credentials of app under test can be passed as follows in the config:

Key | Sample Value | Default Value | Description
----|--------------|---------------|--------|------------
`user` | `NA` | `NA` | test-specific username.
`password` | `NA` | `NA` |  test-specific password.
