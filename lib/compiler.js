
var spaces = /\s+/;

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

function compile(text) {
	if (text == null || text === '')
		return null;
		
	var words = split(text);
	
	if (words.length < 2)
		return null;
	
	if (isString(words))
		return compileString(words);
		
	return null;
}

module.exports = {
	compile: compile
};

