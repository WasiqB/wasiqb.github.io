---
permalink: /coteafs/appium/sample-action-class/
title: "Action Class"
---

In order to avoid writing same action flow of any activity multiple times in our Tests, we can write the Action flow in a separate Action Class as shown below:

```java
import com.github.wasiqb.coteafs.appium.android.AndroidActivityActions;
import com.github.wasiqb.coteafs.appium.android.AndroidDevice;
import com.github.wasiqb.coteafs.appium.android.expense.activities.ConfirmDialogActivity;
import com.github.wasiqb.coteafs.appium.android.expense.activities.DashboardActivity;
import com.github.wasiqb.coteafs.appium.android.expense.activities.TextEntryActivity;

public class TextEntryActivityActions extends AndroidActivityActions {
	public TextEntryActivityActions (final AndroidDevice device) {
		super (device);
	}

        // Override this abstract method and write the Action flow of your Activity.
	@Override
	public void perform () {
		final DashboardActivity home = new DashboardActivity (getDevice ());
		home.onElement ("Text")
			.tap ();

		final TextEntryActivity entry = new TextEntryActivity (getDevice ());
		entry.onElement ("Title")
			.verifyThat ()
			.textShouldBeEqualTo ("Text Entry");

		entry.onElement ("Date")
			.tap ();

                // There is value method available internally which will fetch the input value specified in our Tests thru addInputValue method.
                // The key of the input value is same as Element name specified while creating the Element in the Activity Class.
		setDate (value ("Date"));
		entry.onElement ("Amount")
			.enterText (value ("Amount"));
		entry.onElement ("Description")
			.appendText (value ("Description"));
		entry.onDevice ()
			.hideKeyboard ();
		if ((boolean) value ("AddFavorite")) {
			entry.onElement ("AddFavorite")
				.tap ();
		}
		entry.onElement ("Save")
			.tap ();
		entry.onDevice ()
			.pressBack ();
	}

	private void setDate (final Object date) {
		final ConfirmDialogActivity dialog = new ConfirmDialogActivity (getDevice ());
		if (date == null) {
			dialog.onElement ("Cancel")
				.tap ();
		}
		else {
			final String [] values = date.toString ()
				.split ("-");
			dialog.onElement ("EditMonth")
				.enterText (values [0].toUpperCase ());
			dialog.onElement ("EditDay")
				.enterText (values [1]);
			dialog.onElement ("EditYear")
				.enterText (values [2]);
			dialog.onElement ("OK")
				.tap ();
		}
	}
}
```
