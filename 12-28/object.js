/**通过new来创建一个对象 */
var p = new Object();
/**动态添加属性和方法 */
p.name = 'Tom';
p.age = 18;
console.log(p);

/**字面量创建对象 */
var p1 = {
	name1: 'Tom',
	age1: 18,
};
console.log(p1);

/**工厂模式创建 */
function createPerson(name, age) {
	var obj = {
		name: name,
		age: age,
	};
	return obj;
}

var p2 = createPerson('Tom', 18);
console.log(p2);

/**自定义构造函数创建 */
function fn(name, age) {
	this.name = name;
	this.age = age;
}
var p3 = new fn('Tom', 18);
console.log(p3);

/**构造函数加原型继承 */
function son(name, age) {
	this.name = name;
	this.age = age;
}

son.prototype.setName = function (name) {
	this.name = name;
};

var p4 = new son('Tom', 18);
console.log(p4);
