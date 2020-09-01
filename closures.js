let fun1 = () => {
let variable = 1;
let func2 = () => {
console.log(variable);
variable++;
}
return func2;
}

let closure = fun1();
closure();
closure();
closure();
