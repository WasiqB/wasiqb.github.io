---
permalink: /projects/selenium/usage/
title: "Usage"
toc: true
---

## Usage options

Any of the following options can be used to start working with the framework.

### A. Maven Dependency

The framework can be used directly by adding dependency in the `POM.xml` file as shown below:

```xml
<dependency>
  <groupId>com.github.wasiqb.coteafs</groupId>
  <artifactId>selenium</artifactId>
  <version>3.1.0</version>
</dependency>
```

### B. Gradle Dependency

The framework can be used directly by adding dependency in the `POM.xml` file as shown below:

```xml
compile "com.github.wasiqb.coteafs:selenium:3.1.0"
```
> NOTE:
Sometimes it is observed that due to some conflicting dependencies for Google's Guava, you need to make sure you add exclusion in other library dependencies (which is internally using an old version of the above mentioned library) which you may use in your pom along with this framework. This is how you do this:

```xml
  <exclusions>
    <exclusion>
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
    </exclusion>
  </exclusions>
```

If this won't solve the issue, than you need to remove old versions from your `.m2` repository from your local machine for **Google's Guava**.

### C. Build path reference

In order to use it from build path, you need to clone the framework project to your local machine by executing the below command:

```terminal
$ git clone git@github.com:WasiqB/coteafs-selenium.git
```

Once project is cloned, build the project by executing the below command.

```terminal
$ mvn clean install -DskipTests=true
```

After build is completed successfully, refer the JAR's created in `target` folder in build path of your project.

### D. Download the JAR's from the Release Tab

You can download the latest release JAR's from [GitHub][release] and add the reference in your project classpath.

[release]: https://github.com/WasiqB/coteafs-selenium/releases/latest
