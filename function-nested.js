var num = 33;

function fun1(){

    num = 44;

    console.log(num);

    fun2()

    function fun2(){
        var num = 55;
    }
}

console.log(num);
fun1();
console.log(num);