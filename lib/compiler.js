
var spaces = /\s+/;

var fnmap = {
	s: compileString,
	n: compileNumber,
	a: compileOp('add'),
	b: compileOp('subtract'),
	m: compileOp('multiply'),
	d: compileOp('divide'),
	o: compileOp('modulus'),
	l: compileOp('load'),
	t: compileOp('store'),
	g: compileOp('get'),
	e: compileOp('set'),
}

function getFunction(words) {
	var letter = words[1][0];

	return fnmap[letter];
}

function compileOp(op) {
	return function() {
		return 'machine.' + op + '()';
	};
}

function split(text) {
	return text.trim().split(spaces);
}

function compileString(words) {
	var str = '';
	var l = words.length;
	
	for (var k = 2; k < l; k++)
		str += words[k][0];
		
	return 'machine.push(' + JSON.stringify(str) + ')';
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

