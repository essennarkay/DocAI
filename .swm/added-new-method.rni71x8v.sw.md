---
title: added new method
---
# Introduction

This document will walk you through the recent code change involving the addition of a new method.

The purpose of this change is to enhance the functionality of our utility module.

We will cover:

1. Why the new method was added.
2. How the new method fits into the existing codebase.
3. The expected behavior of the new method.

# Why the new method was added

The new method, <SwmToken path="/frontend-template/src/utils/doc-testing.js" pos="21:2:2" line-data="function sayHelloRohith(){">`sayHelloRohith`</SwmToken>, was introduced to provide a simple greeting functionality. This method is primarily for testing purposes and serves as a placeholder for more complex logic that may be added in the future.

# How the new method fits into the existing codebase

<SwmSnippet path="frontend-template/src/utils/doc-testing.js" line="16">

---

The method is added to the <SwmPath>[frontend-template/…/utils/doc-testing.js](/frontend-template/src/utils/doc-testing.js)</SwmPath> file. This file is part of our utility module, which contains various helper functions used across the application. By placing the method here, we ensure that it can be easily accessed and utilized wherever needed.

```
console.log(`Final price: ₹${price}`);




function sayHelloRohith(){
  console.log("hello Rohith");
  return true;
}
```

---

</SwmSnippet>

# The expected behavior of the new method

The <SwmToken path="/frontend-template/src/utils/doc-testing.js" pos="21:2:2" line-data="function sayHelloRohith(){">`sayHelloRohith`</SwmToken> method logs a greeting message to the console and returns a boolean value. This behavior is straightforward and serves as a basic example of how utility functions can be structured within our codebase.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBRG9jQUklM0ElM0Flc3Nlbm5hcmtheQ==" repo-name="DocAI"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
