
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

exports['compile one word'] = function (test) {
	test.equal(compiler.compile(' hi   '), null);
};

exports['compile string'] = function (test) {
	test.equal(compiler.compile('a solid high elevator lifts light oxen'), 'machine.push("hello")');
};



