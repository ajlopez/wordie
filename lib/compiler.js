
var spaces = /\s+/;

var fnmap = {
	s: compileString,
	n: compileNumber,
	ap: compileOp('apply'),
	a: compileOp('add'),
	b: compileOp('subtract'),
	m: compileOp('multiply'),
	d: compileOp('divide'),
	o: compileOp('modulus'),
	l: compileOp('load'),
	t: compileOp('store'),
	g: compileOp('get'),
	e: compileOp('set'),
	k: compileText('console.log(machine.pop())'),
	w: compileWord,
	u: compileOp('dup'),
	i: compileText('if (machine.pop()) {'),
	h: compileText('}'),
	y: compileText('while (machine.pop()) {'),
	r: compileText('return machine.pop()'),
}

function getFunction(words) {
	if (words[1].length >= 2) {
		var prefix = words[1].substring(0, 2);
		
		if (fnmap[prefix])
			return fnmap[prefix];
	}
	
	var letter = words[1][0];

	return fnmap[letter];
}

function compileOp(op) {
	return function() {
		return 'machine.' + op + '()';
	};
}

function compileText(text) {
	return function() {
		return text;
	};
}

function split(text) {
	return text.trim().split(spaces);
}

function compileString(words) {
	var str = '';
	
	if (words[1][1] == 'p')
		return 'machine.push(" ")';
		
	var l = words.length;
	
	for (var k = 2; k < l; k++)
		str += words[k][0];
		
	return 'machine.push(' + JSON.stringify(str) + ')';
}

function compileWord(words) {
	var word = '';
	var l = words.length;
	
	for (var k = 2; k < l; k++)
		word += words[k][0];
		
	return 'machine.push(' + word + ')';
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

function isSimpleCommand(code) {
	if (!code || !code.length)
		return false;
		
	return code[code.length -1] !== '{' && code[code.length -1] !== '}';
}

function compileLines(text) {
	var code = '';
	
	var lines = text.split('\n');
	
	lines.forEach(function (line) {
		var compiled = compile(line);
		
		if (compiled) {
			if (code.length)
				code += ' ';
				
			code += compiled;
			
			if (isSimpleCommand(compiled))
				code += ';';
		}
	});
	
	return code;
}

function compile(text) {
	if (text == null || text === '')
		return null;
		
	if (text.indexOf('\n') >= 0)
		return compileLines(text);
		
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

