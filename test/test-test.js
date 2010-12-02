var testCase = require('nodeunit').testCase;
module.exports = testCase({
    setUp: function (callback) {
        this.foo = 'bar';
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    "testing for the thing": function (test) {
        test.equals(this.foo, 'bar');
        test.done();
    },
	different_type_of_name_of_test_case: function (test) {
        test.equals(this.foo, 'bar');
        test.done();
    }
});