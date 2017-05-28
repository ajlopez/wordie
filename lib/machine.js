
function Machine() {
	var stack = [];
	var values = {};
	
	this.push = function(value) { stack.push(value); };
	this.pop = function () {
		var value = stack[stack.length - 1];
		
		stack.length--;
		
		return value;
	};
	
	this.empty = function () { return stack.length === 0; };
	
	this.add = function () { stack.push(stack.pop() + stack.pop()); };
	
	this.dup = function () { stack.push(stack[stack.length - 1]); };
	
	this.get = function () { var name = this.pop(); stack.push(this.pop()[name]); };
	this.set = function () { var name = this.pop(); var obj = this.pop(); obj[name] = this.pop(); };
	
	this.store = function () { var name = this.pop(); values[name] = this.pop(); };
	this.load = function() { this.push(values[this.pop()]); }
}

module.exports = function () {
	return new Machine();
};

