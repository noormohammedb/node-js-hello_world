function add(num1, num2, callback) {
	let error = false;
	if (num1 == num2)
		error = true;
	callback(num1 + num2, error);
}
function multi(num1, callback) {
	let error = false;
	if (!num1)
		error = true;
	callback(num1 * num1, error);
}
function div(num1, num2, callback) {
	let error = false;
	if (!num1)
		error = true;
	callback(num1 / num2, error)
}


add(3, 2, (sum, error) => {
	if (error) throw error;
	console.log(sum);
	multi(sum, (product, error) => {
		if (error) throw error
		console.log(product);
		div(product, product, (quos, error) => {
			if (error) throw error;
			console.log(quos);
		})
	})
});