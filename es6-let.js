function hello(){
    function hai(){
        var i = 44;
        var val = 22;
        if(i){
            let val = 44;
            console.log(val);
            i = 0;
        }
        console.log(val);
    }
    hai();
}

hello();