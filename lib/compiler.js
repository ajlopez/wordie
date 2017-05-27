
var spaces = /\s+/;

var fnmap = {
	s: compileString,
	n: compileNumber
}

function getFunction(words) {
	var letter = words[1][0];
	
	return fnmap[letter];
}

function split(text) {
	return text.trim().split(spaces);
}

function isString(words) {
	return words[1][0] === 's';
}

function compileString(words) {
	var str = '';
	var l = words.length;
	
	for (var k = 2; k < l; k++)
		str += words[k][0];
		
	return 'machine.push(' + JSON.stringify(str) + ')';
}

function isNumber(words) {
	return words[1][0] === 'n';
}

function compileNumber(words) {
	var num = 0;
	var l = words.length;
	
	for (var k = 2; k < l; k++) {
		num *= 10;
		
		var wl = words[k].length;
		
		if (wl > 2)
			num += wl - 2;
	}
		
	return 'machine.push(' + num + ')';
}

function compile(text) {
	if (text == null || text === '')
		return null;
		
	var words = split(text);
	
	if (words.length < 2)
		return null;
		
	var fn = getFunction(words);
	
	if (fn)
		return fn(words);

	return null;
}

module.exports = {
	compile: compile
};

