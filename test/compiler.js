
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

exports['compile number 1'] = function (test) {
	test.equal(compiler.compile('the number one'), 'machine.push(1)');
};

exports['compile number 0'] = function (test) {
	test.equal(compiler.compile('the number is'), 'machine.push(0)');
};

exports['compile number 42'] = function (test) {
	test.equal(compiler.compile('next night starts late'), 'machine.push(42)');
};
