---
title: "Why is Maven project more preferable than simple Java project?"
author: Faisal Khatri
header:
  overlay_color: "#5e616c"
  overlay_filter: "0.5"
  overlay_image: /assets/images/posts/2019-03-03-mavenproject-vs-javaproject/discussion_overlay.png
  teaser: /assets/images/posts/2019-03-03-mavenproject-vs-javaproject/discussion_overlay.png
excerpt: In this post we will be discussing about the benefits of Maven project over simple Java project.
categories:
  - Maven
  - Java
  - Automation Testing
  - Testing
tags:
  - Maven
  - CI
  - Automation testing
date: 2019-03-03
last_modified_at: 2019-03-03
discussion:
  - url: /assets/images/posts/2019-03-03-mavenproject-vs-javaproject/discussion.jpg
    image_path: /assets/images/posts/2019-03-03-mavenproject-vs-javaproject/discussion.jpg
    alt: maven-vs-java-discussion
    title: maven-vs-java-discussion
maven-project-structure:
  - url: /assets/images/posts/2019-03-03-mavenproject-vs-javaproject/maven_project_screenshot.png
    image_path: /assets/images/posts/2019-03-03-mavenproject-vs-javaproject/maven_project_screenshot.png
    alt: maven-project-structure
    title: maven-project-structure
---

# Introduction

Hello Everyone,

Today we will be discussing about maven and java projects.

Many people are aware of Maven. But if I ask why would you prefer Maven based Java project over simple Java project?
Many may give just a normal answer like “Maven has the ability to download dependencies automatically based on the dependencies block you put in respective maven project’s pom.xml file”.

Yes, that’s true and its one of the major bonus point of maven based java project. But there are certain other benefits in maven which when utilised fully can help you a lot in managing and implementing your project.

Let me describe you all the benefits of using maven on by one.

So, let’s get started.

{% include gallery id="discussion" caption="Discussion" %}

# What is Maven?

Maven is a powerful project management tool that is based on POM (project object model). It is used for projects build, dependency and documentation.

How Maven solves the following problems we face in project management:
1. It adds all the necessary jars to the project as per the dependencies put ny user in pom.xml file.
1. Automatically creates the right project structure.
1. It makes a project easy to build.
1. It provides project information like log document, cross references sources, mailing list, dependency list, unit test reports, etc.
1. Works with CLI(Command line interface).

> Following is the project structure of maven project, created in Eclipse IDE:

{% include gallery id="maven-project-structure" caption="Maven Project Structure" %}

# What is `pom.xml`?

POM is an acronym for Project Object Model. It contains information about project and configuration of the project such as dependencies, build directory, source directory, test source directory, plugins, goal, etc.
Maven reads pom.xml and then executes goal.

> Following is the sample of pom.xm file:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <groupId>com.mfaisalkhatri</groupId>
  <artifactId>cucumberpractice</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <dependencies>
  	<dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
    <dependency>
  		<groupId>org.seleniumhq.selenium</groupId>
  		<artifactId>selenium-java</artifactId>
  		<version>3.14.0</version>
  	</dependency>
  </dependencies>
  <build>
  	<plugins>
  		<plugin>
  			<groupId>org.apache.maven.plugins</groupId>
  			<artifactId>maven-compiler-plugin</artifactId>
  			<version>3.7.0</version>
  			<configuration>
  				<encoding>UTF-8</encoding>
  				<source>1.8</source>
  				<target>1.8</target>
  				<compilerArgument>-Werror</compilerArgument>
  			</configuration>
  		</plugin>
  	</plugins>
  </build>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
	</properties>
</project>
```

Once you put dependencies inside the file and save it, maven searches for dependency in maven central repository and downloads the jar files accordingly for your project.

# Maven CLI Commands

- `mvn validate` : Validate the project is correct and all necessary information is available.
- `mvn compile` : Compile the source code of the project.
- `mvn test` : Test the compiled source code using a suitable unit testing framework. These tests should not require the code be packaged or deployed.
- `mvn package` : Take the compiled code and package it in its distributable format, such as a JAR.
- `mvn integration-test` : Process and deploy the package if necessary into an environment where integration tests can be run.
- `mvn verify` : Run any checks to verify the package is valid and meets quality criteria.
- `mvn install` : Install the package into the local repository, for use as a dependency in other projects locally.
- `mvn deploy` : Done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects.

There are two other Maven life cycles of note beyond the default list above. They are as follows:

- `mvn clean` : Cleans up artefacts created by prior builds.
- `mvn site` : Generates site documentation for this project.

Phases are actually mapped to underlying goals. The specific goals executed per phase is dependent upon the packaging type of the project.

You can also run the above commands using life cycles commands for e.g.
- `mvn clean install`
- `mvn clean test`
- `mvn clean verify`

The other major flaw in simple java project is that you cannot run it from CLI also, all the packaging and deploying tasks needs to be taken care manually which is a very tedious task.

Hope, you have got the basic knowledge of how maven works and why it would be more preferable than the simple java project where you have to do everything manually.

Keep watching this site for more such interesting blogs.

Regards,

Faisal Khatri.

# References
* Maven commands have been taken from [Maven](https://maven.apache.org).
