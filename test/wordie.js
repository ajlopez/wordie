
var wordie = require('..');

exports['wordie as object'] = function (test) {
	test.ok(wordie);
	test.equal(typeof wordie, 'object');
};