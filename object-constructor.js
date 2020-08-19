function object_model(name,age,place) {
	this.name = name;
	this.age = age;
	this.place = place;
	this.display = function () {
		console.log("Name : " + this.name + " age : " + this.age + " place : " + this.place);
	}
}


let sasi = new object_model("sasi",59,"deli");
let damu = new object_model("damu",19,"nekkeraje");

sasi.display();
damu.display();
