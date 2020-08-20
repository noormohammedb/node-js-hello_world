class hello{
    constructor(){
        console.log("Iam Hello constructor");
    }
    display(){
        console.log("Hell hell");
    }
}

class hai extends hello{
    constructor(val1=0,val2=0){
        super();
        this.val1 = val1;
        this.val2 = val2;
    }
    display(){
        console.log("Hello : "+(this.val1+this.val2));
    }
}

let obj = new hai(undefined,55);

// function overloading 
obj.display();