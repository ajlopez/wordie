
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

exports['compile an space'] = function (test) {
	test.equal(compiler.compile('the spot was huge'), 'machine.push(" ")');
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

exports['compile add operation'] = function (test) {
	test.equal(compiler.compile('the add operation'), 'machine.add()');
};

exports['compile subtract operation'] = function (test) {
	test.equal(compiler.compile('the bus is arriving'), 'machine.subtract()');
};

exports['compile multiply operation'] = function (test) {
	test.equal(compiler.compile('a man small step'), 'machine.multiply()');
};

exports['compile divide operation'] = function (test) {
	test.equal(compiler.compile('the division is here'), 'machine.divide()');
};

exports['compile modulus operation'] = function (test) {
	test.equal(compiler.compile('An overconfident person'), 'machine.modulus()');
};

exports['compile store operation'] = function (test) {
	test.equal(compiler.compile('The tree is yellow'), 'machine.store()');
};

exports['compile load operation'] = function (test) {
	test.equal(compiler.compile('The loan was canceled'), 'machine.load()');
};

exports['compile get operation'] = function (test) {
	test.equal(compiler.compile('A goat escaped'), 'machine.get()');
};

exports['compile set operation'] = function (test) {
	test.equal(compiler.compile('Nobody expected a disaster'), 'machine.set()');
};

exports['compile print operation'] = function (test) {
	test.equal(compiler.compile('The king is dead'), 'console.log(machine.pop())');
};

exports['compile word'] = function (test) {
	test.equal(compiler.compile("Don't worry, Mary, about the hurricane"), 'machine.push(Math)');
};

exports['compile dup'] = function (test) {
	test.equal(compiler.compile("The upper side is far"), 'machine.dup()');
};

exports['compile if'] = function (test) {
	test.equal(compiler.compile("An island wake up"), 'if (machine.pop()) {');
};

exports['compile close brace'] = function (test) {
	test.equal(compiler.compile("the high level"), '}');
};
