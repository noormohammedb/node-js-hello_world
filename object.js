let test = {
	name:"sasi",
	place:"india",
	display: function() {
		let name = " aaro ";
		console.log(this.name + "  " + this.place + "  " + name);
	}
};
test.display();


for( x in test)
    console.log(x + ":" + test[x]);

test['place'] = "canada";

console.log(test);

delete test.place;

test.hk="hell";

// console.log(test);

test.val1="hello";
test.val2="Hai";

console.log(test);