---
permalink: /coteafs/appium/orp/
title: "ORP - Object Repository Pattern"
toc: true
---

## Background

When we write Appium tests traditionally, locators tend to get scattered around our tests and it becomes very difficult to maintain it. Now when we use Page Object concept, although it is the most recommended approach, it can still be a problem with maintenance when there are too many activities in an App. So in this scenario, Object repository approach is easy to maintain as there is generic way we can access the elements. This framework uses Object repository concept where all the user interactive elements are saved in their respective Activity classes and are declared in `DeviceElement` class.

## How does DeviceElement handles multiple elements?

The `DeviceElement` class saves all the elements available on current Activity in hierarchical structure. Instead of finding all the elements on driver, it will help finding elements in a single hierarchy. It is mandatory to have a root element of that Activity as parent and all it's interactive elements as it's child.

## How to create DeviceElement for Login Activity?

Let's see an example of how to create `DeviceElement` of a Login Activity.

```java
        // This is the root element as seen in Inspector. This can be any parent
        // displayed in inspector which contains all the other input elements.
	final DeviceElement login = DeviceElement.create ("Login")	// <- create - You can specify any name you want. This will be refereed from our tests. It is case sensitive.
		.using (By.className ("UIAApplication"));	// <- using - Specify the locator you identified using the inspector.
    	// This is the child element of login created above.
	DeviceElement.create ("UserName")
		.parent (login)		// <- parent - Specify the parent of this element.
		.index (1)		// <- index - Specify the index where this element will be found. can be skipped if there is only 1 element with the specified locator.
		.using (By.className ("UIATextField"));
    	// This is also the child element of login created above.
	DeviceElement.create ("Password")
		.parent (login)
		.using (By.className ("UIASecureTextField"));
    	// This is also the child element of login created above.
	DeviceElement.create ("SignIn")
		.parent (login)
		.using (By.name ("Sign In"));
```

The code snippet explains everything. If you still find it difficult to understand, you can discuss it with me on our [mailing list][groups] or on our [Gitter chats][gitter].

[groups]: https://groups.google.com/forum/#!forum/coteafs-appium
[gitter]: https://gitter.im/wasiqb/coteafs-appium
