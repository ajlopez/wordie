
var machine = require('./machine');
var compiler = require('./compiler');
var fs = require('fs');

function execute(text) {
	var code = compiler.compile(text);
	var fn = new Function('machine', code);
	var mach = machine();
	
	return fn(mach);
}

function executeFile(filename) {
	return execute(fs.readFileSync(filename).toString());
}

module.exports = {
	execute: execute,
	executeFile: executeFile
};


