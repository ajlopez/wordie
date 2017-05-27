
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
