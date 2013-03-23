module.exports = {
    'resulting promise should be fulfilled after timeout' : function(test) {
        var resPromise = Vow.promise().delay(10, 'ok');
        setTimeout(function() {
            test.ok(resPromise.isFulfilled());
            test.strictEqual(resPromise.valueOf(), 'ok');
            test.done();
        }, 20);
    },

    'resulting promise should be fulfilled before timeout' : function(test) {
        var origPromise = Vow.promise(),
            resPromise = origPromise.delay(20, 'ok');

        setTimeout(function() {
            origPromise.fulfill('val');
        }, 10);

        resPromise.then(function(val) {
            test.strictEqual(val, 'val');
            test.done();
        });
    },

    'resulting promise should be rejected before timeout' : function(test) {
        var origPromise = Vow.promise(),
            resPromise = origPromise.delay(20),
            error = new Error('error');

        setTimeout(function() {
            origPromise.reject(error);
        }, 10);

        resPromise.then(null, function(_error) {
            test.strictEqual(_error, error);
            test.done();
        });
    }
};