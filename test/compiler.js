
var compiler = require('../lib/compiler');

exports['compile null'] = function (test) {
	test.equal(compiler.compile(null), null);
};

exports['compile empty string'] = function (test) {
	test.equal(compiler.compile(''), null);
};

exports['compile spaces'] = function (test) {
	test.equal(compiler.compile('    '), null);
};

