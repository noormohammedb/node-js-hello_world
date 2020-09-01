function outer(outSideValue){
   return function inner(inSideValue){
      console.log(outSideValue);
      console.log(inSideValue);
   }
}

let closure = outer('OutSide');
closure('InSide');