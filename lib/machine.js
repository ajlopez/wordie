
function Machine() {
	var stack = [];
	
	this.push = function(value) { stack.push(value); };
	this.pop = function () {
		var value = stack[stack.length - 1];
		
		stack.length--;
		
		return value;
	};
}

module.exports = function () {
	return new Machine();
};

