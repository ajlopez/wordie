
var spaces = /\s+/;

function split(text) {
	return text.trim().split(spaces);
}

function compile(text) {
	if (text == null || text === '')
		return null;
		
	var words = split(text);
	
	if (words.length === 0 || words.length === 1 && words[0] === '')
		return null;
	
	return compileWords(words);
}

module.exports = {
	compile: compile
};