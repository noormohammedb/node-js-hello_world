let closure =(function(){
    var private_value = 25;
    function inside(value_argument){
        private_value += value_argument;
    }
    return {
        increment : function(){
            inside(1);
        },
        decrement : function(){
            inside(-1);
        },
        getValue : function(){
            return private_value;
        }
    };
})();

console.log(closure.private_value);

console.log(closure.getValue());
closure.increment();
console.log(closure.getValue());
closure.decrement();
console.log(closure.getValue());