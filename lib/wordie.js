
var machine = require('./machine');
var compiler = require('./compiler');

function execute(text) {
	var code = compiler.compile(text);
	var fn = new Function('machine', code);
	var mach = machine();
	
	return fn(mach);
}

module.exports = {
	execute: execute
};


