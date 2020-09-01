let closureModel = (inside_value) => {
   let privateData = "i am private";
   return {
      getValue : () => {
         console.log(privateData);
         return inside_value;
      },
      incrementValue : () => {
         inside_value++;
      },
      decrementValue : () => {
         inside_value--;
      }
   }
}

let closure = closureModel(10);
console.log(closure.getValue());

closure.incrementValue();
console.log(closure.getValue());

closure.decrementValue();
console.log(closure.getValue());