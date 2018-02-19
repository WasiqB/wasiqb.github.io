---
permalink: /coteafs/appium/sample-test-class/
title: "Test Class"
---

Now we can move to writing our first Test class by extending the base test class created earlier. You can write the Test as you may wish. This example is for demonstration purpose only.

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.github.wasiqb.coteafs.appium.android.expense.actions.TextEntryActivityActions;

public class ExpenseTrackerTest extends DefaultTest {
	@Test (dataProvider = "textEntryDataProvider")
	public void testCreateEntry (final String date, final String amount, final String description,
			final boolean favorite) {
		final TextEntryActivityActions entry = new TextEntryActivityActions (this.androidDevice);
		entry.addInputValue ("Date", date)
			.addInputValue ("Amount", amount)
			.addInputValue ("Description", description)
			.addInputValue ("AddFavorite", favorite)
			.perform ();
	}

	@DataProvider
	public Iterator <Object []> textEntryDataProvider () {
		final List <Object []> data = new ArrayList <> ();
		data.add (new Object [] { "Oct-21-2017", "10000", "Test 1", false });
		data.add (new Object [] { "Oct-22-2017", "10000", "Test 2", false });
		data.add (new Object [] { "Oct-23-2017", "10000", "Test 3", false });
		data.add (new Object [] { "Oct-24-2017", "10000", "Test 4", false });
		data.add (new Object [] { null, "10000", "Test 5", false });
		data.add (new Object [] { "Oct-21-2017", "10000", "Test 6", true });
		data.add (new Object [] { "Oct-22-2017", "10000", "Test 7", true });
		data.add (new Object [] { "Oct-23-2017", "10000", "Test 8", true });
		data.add (new Object [] { "Oct-24-2017", "10000", "Test 9", true });
		data.add (new Object [] { null, "10000", "Test 10", true });
		return data.iterator ();
	}
}
```
