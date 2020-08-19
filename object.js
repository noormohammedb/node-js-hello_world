let test = {name:"sasi",place:"india"};

for( x in test)
    console.log(x + ":" + test[x]);

test['place'] = "canada";

console.log(test);

delete test.place;

test.hk="hell";

console.log(test);