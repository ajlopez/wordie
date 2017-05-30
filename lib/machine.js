
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
	
	this.apply = function() { 
		var fn = this.pop();
		var obj = this.pop();
		var arity = this.pop();
		var args = [];
		
		while (arity-- > 0)
			args.push(this.pop());
		
		this.push(fn.apply(obj, args));
	}
}

module.exports = function () {
	return new Machine();
};

