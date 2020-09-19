const Promise = require('promise');
function add(num1, num2) {
   return new Promise((resolve, reject) => {
      if (num1 == num2)
         reject('numbers are same');
      else {
         resolve(num1 + num2);
      }
   });
}

add(4, 3)
   .then((sum) => {
      console.log(sum);
      return (() => sum * sum)
   })
   .then((product) => {
      console.log(product());
      return (() => product() / product())
   })
   .then((ques)=>{
      console.log(ques());
   })
   .catch((error) => {
      console.log(error);
   });