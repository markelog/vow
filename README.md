**NOTE**. Documentation for old versions of the library can be found at https://github.com/dfilatov/vow/blob/0.3.x/README.md.

<a href="http://promises-aplus.github.com/promises-spec"><img src="http://promises-aplus.github.com/promises-spec/assets/logo-small.png" align="right" /></a>
Vow 0.4.5 [![NPM version](https://badge.fury.io/js/vow.png)](http://badge.fury.io/js/vow) [![Build Status](https://secure.travis-ci.org/dfilatov/vow.png)](http://travis-ci.org/dfilatov/vow)
=========

Vow is a [Promises/A+](http://promisesaplus.com/) implementation.
It also supports [DOM Promises](http://dom.spec.whatwg.org/#promises) specification.

Getting Started
---------------
### In Node.js ###
You can install using Node Package Manager (npm):

    npm install vow

### In Browsers ###
```html
<script type="text/javascript" src="vow.min.js"></script>
```
It also supports RequireJS module format and [YM module](https://github.com/ymaps/modules) format.

Vow has been tested in IE6+, Mozilla Firefox 3+, Chrome 5+, Safari 5+, Opera 10+.

Usage
-----
### Creating a promise ###
There are two possible ways to create a promise.
#### 1. Using a deferred ####
```js
function doSomethingAsync() {
    var deferred = vow.defer();
    
    // now you can resolve, reject, notify corresponging promise within `deferred`
    // e.g. `defer.resolve('ok');`
        
    return deferred.promise(); // and return corresponding promise to subscribe to reactions
}

doSomethingAsync().then(
    function() {}, // onFulfilled reaction
    function() {}, // onRejected reaction
    function() {}  // onNotified reaction
    );
```
The difference between `deferred` and `promise` is that `deferred` contains methods to resolve, reject and notify corresponding promise, but the `promise` by itself allows only to subscribe on these actions.

#### 2. ES6-compatible way ####
```js
function doSomethingAsync() {
    return new vow.Promise(function(resolve, reject, notify) {
        // now you can resolve, reject, notify the promise
    });
}

doSomethingAsync().then(
    function() {}, // onFulfilled reaction
    function() {}, // onRejected reaction
    function() {}  // onNotified reaction
    );
```


Full API reference can be found at http://dfilatov.github.io/vow/.
