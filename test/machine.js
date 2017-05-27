
var machine = require('../lib/machine');

exports['push and pop'] = function (test) {
	var mach = machine();
	
	mach.push(1);
	mach.push(2);
	
	test.equal(mach.pop(), 2);
	test.equal(mach.pop(), 1);
};

