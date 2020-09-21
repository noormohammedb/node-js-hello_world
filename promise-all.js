const promise = require('promise');

function waiting3Second() {
   return new promise((resolve, reject) => {
      setTimeout(() => {
         resolve('completed 3 second');
      }, 3000);
   });
}

function waiting2Second() {
   return new promise((resolve, reject) => {
      setTimeout(() => {
         resolve('completed 2 second');
      }, 2000);
   });
}

console.log("Program Running");

promise.all([waiting2Second(), waiting3Second()]).then((data)=>{
   console.log(data);
})

// waiting3Second().then((data) => {
//    console.log(data);
// })
// waiting2Second().then((data) => {
//    console.log(data);
// });