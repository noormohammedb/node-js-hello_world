const promise = require('promise');

function waiting2Second() {
   return new promise((resolve, reject) => {
      setTimeout(() => {
         resolve('completed 2 second');
      }, 2000);
   });
}

console.log("Program Running");

async function asy(){
   let completed = await waiting2Second();
   console.log(completed,' <=');
}

asy()