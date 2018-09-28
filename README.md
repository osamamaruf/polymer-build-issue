# \<Polymer Build Issue\>

Basic polymer application to display silent build failure.

## Running the demo

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed.
Second, make sure you have the [Bower](https://bower.io/) installed. Then run `bower install` get required components.

## Building Your Application

To build use : 

```
$ polymer build
```

## Issue

Removing the lazy import 

```
<link rel="lazy-import" href="../../common/libs/lodash.html">

```

from the app shell (`src/components/my-app/my-app.html`) causes the build to silently fail. 

The behavior has been tested on polymer-cli version 1.8.0.

## Note
Interestingly, if the polymer element import (being done via cdn) is being done via bower components then the build does not fail even if the lazy import is removed.
