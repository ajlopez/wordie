
var wordie = require('..');

exports['wordie as object'] = function (test) {
	test.ok(wordie);
	test.equal(typeof wordie, 'object');
};

exports['execute a simple program'] = function (test) {
	var text = [
		"the number one",
		"the nightly moon",
		"are all brigth",
		"in rare sky"
	].join('\r\n');

	test.equal(wordie.execute(text), 3);
};

