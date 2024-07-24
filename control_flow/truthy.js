// const userEmail= "himanshu@google.com"    // truthy value
//const userEmail= ""    // falsy value
const userEmail= []    // falsy value

if(userEmail){
 console.log("Got user Email")
} 
else{
    console.log("Don't have user Email")
}

// falsy values
// false,0 ,-0, BigInt 0n, "", null ,undefined,Nan
 
// truthy values
// "0", "false" ," ", [], {}, function(){}

// if (userEmail.length === 0) {               // array is truthy
//     console.log("array is empty")
// }

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined

// let val1=5??10                    // this operator returns first value
// let val1=null??10                // but if any one the value is null or undefined           
// let val1=undefined??5            // then it returns other value  
// let val1=undefined??null 
   let val1=undefined??10??5 

// console.log(val1)


// Terniary operator
//condition ? true : false

const iceTeaPrice=100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")