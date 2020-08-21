const read = require('readline-sync');
let fun1 = (data) => {
	console.log(data);
}

let fun2 = (callback) => {
	callback("I am Callback");
}

fun2(fun1);
