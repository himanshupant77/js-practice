// immmediately invoked function expressions (iife)

// function one(){                             //normal execution of function
//     console.log("Hello and welcome")
// }
// one()


(function one(){                             // iife execution of function
    console.log("Hello and welcome")
})();                                        //semicolon used to end execution


 ( () => {                                      // iife works for arrow function as well
    console.log("Hello and welcome again")
  })()