---
title: "How to write API Tests using REST-Assured and OkHttp?"
author: Faisal Khatri
header:
  overlay_color: "#5e616c"
  overlay_filter: "0.5"
  overlay_image: /assets/images/posts/2020-03-14-restassured-okhttp/christopher-gower-m_HRfLhgABo-unsplash.jpg
  caption: Photo by Christopher Gower on Unsplash
excerpt: In this post we will be discussing about how to write API Tests using REST-Assured and OkHttp.
categories:
  - REST-Assured
  - OkHttp
  - Automation Testing
  - Testing
  - API Testing
  - Java
tags:
  - OkHttp
  - REST-Assured
  - Automation testing
  - API Testing
date: 2020-03-15
last_modified_at: 2020-03-15

---
## :question: What is REST-Assured?

REST Assured is a Java library that provides a domain-specific language (DSL) for writing powerful, maintainable tests for RESTful APIs.

## :question: What is OkHttp?

OkHTTP is an open source project designed to be an efficient HTTP client:
- HTTP/2 support allows all requests to the same host to share a socket.
- Connection pooling reduces request latency (if HTTP/2 isn’t available).
- Transparent GZIP shrinks download sizes.
- Response caching avoids the network completely for repeat requests.

## :question: How to write API Tests using REST-Assured/ OkHttp?

As many of you know that REST-Assured and OkHttp are currently in demand for writing automation tests for APIs. I was learning about Rest-Assured and OkHttp, an idea just popped into my mind, why not save the code on github so it would serve as a learning material for beginners.

Hence, I created a repository on github(checkout the link below). It has API testing example codes for GET, POST, PUT, PATCH and DELETE requests using REST-Assured as well as OkHttp.

[OkHttpRestAssuredExamples][githubrepo]

## :bulb: REST-Assured or OkHttp?

Interesting question! While I was running the tests, I found an interesting thing which caught my attention. The execution speed of OkHttp when compared to Rest-assured was far better.
Checkout the following blog for more details about REST-Assured and OkHttp performance with reference to execution time:

[REST-Assured or OkHttp?] [wordpressblog]

In the end, I would like to mention that it all depends on the project and your requirement for choosing the framework to write and execute the tests. Everything has something unique, its up to you how you choose!!

[wordpressblog]: https://iamfaisalkhatri.wordpress.com/2020/03/10/rest-assured-or-okhttp/
[githubrepo]: https://github.com/mfaisalkhatri/OkHttpRestAssuredExamples
