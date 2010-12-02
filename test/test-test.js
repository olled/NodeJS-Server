exports["test some stuff"] = function(test){
    test.expect(1);
    test.ok(true, "this assertion should pass");
    test.done();
};

exports["test some other stuff"] = function(test){
    test.ok(false, "this assertion should fail");
    test.done();
};