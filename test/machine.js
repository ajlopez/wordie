
var machine = require('../lib/machine');

exports['push and pop'] = function (test) {
	var mach = machine();
	
	mach.push(1);
	mach.push(2);

	test.equal(mach.empty(), false);
	
	test.equal(mach.pop(), 2);
	test.equal(mach.pop(), 1);
	
	test.ok(mach.empty());
};

exports['add'] = function (test) {
	var mach = machine();
	
	mach.push(1);
	mach.push(2);

	test.equal(mach.empty(), false);

	mach.add();
	
	test.equal(mach.pop(), 3);
	
	test.ok(mach.empty());
};

exports['dup'] = function (test) {
	var mach = machine();
	
	mach.push(1);
	mach.dup();

	test.equal(mach.empty(), false);
	
	test.equal(mach.pop(), 1);
	test.equal(mach.pop(), 1);
	
	test.ok(mach.empty());
};

exports['get'] = function (test) {
	var mach = machine();
	
	mach.push(Math);
	mach.push("PI");
	mach.get();
	
	test.equal(mach.pop(), Math.PI);
	
	test.ok(mach.empty());
};

exports['set'] = function (test) {
	var mach = machine();
	var obj = {};
	
	mach.push("Adam");
	mach.push(obj);
	mach.push("name");
	mach.set();
	
	test.equal(obj.name, "Adam");

	test.ok(mach.empty());
};

exports['store and load'] = function (test) {
	var mach = machine();
	
	mach.push(42);
	mach.push("answer");
	mach.store();
	
	mach.push("answer");
	mach.load();
	
	test.equal(mach.pop(), 42);

	test.ok(mach.empty());
};
