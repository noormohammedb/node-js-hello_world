let long = (Timeout) => {
	let time = new Date();
	for( ;(new Date() - time) <= Timeout; );
}

let w8 = (count,leng) => {
	console.log("start " + count);
	long(leng);
	console.log("finish " + count);
}

setTimeout(() => w8(1,3000),300);
setTimeout(() => w8(2,2000),200);
setTimeout(() => w8(3,1000),100);