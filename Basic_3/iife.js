 //Immediataly invoked function expression
 (function DB(){// named iife
    console.log("DB connected")
})();
console.log("Hello");




 (()=>{// unnamed iife
    console.log("DB connected in arrow")
 })();
 
 
 //parameterised iife
 
  ((name)=>{// unnamed iife
     console.log(`Hello ${name}, DB connected`)
  })("SAI");


//   normal function variable accessiable in some global object
// but iife variable accessible in function
