// if 
const isUserLoggedIn=true
const temperature =41

// if (2=="2") {                       // == does not check the type of 
//     console.log("executed")
// }
// else{
//     console.log("this one")
// }


// if (2==="2") {                      // === checks both type of and string     
//     console.log("executed")
// }
// else{
//     console.log("this one")
// }


// if (temperature < 50) {                   //typical if else statement
//     console.log("temp less than 50")
// }

// else{
//     console.log("temp is greater than 50")
// }


     const score=200
//   if (score>100) {
//     const power="fly"
//     console.log(`User power ${power}`)
// }
// console.log(`User power ${power}`)      // error of block scope


const balance=1000
//if(balance>500) console.log("test") , console.log("test2"); //bad practice

// if (balance<500) {                     //basic if else statements
//      console.log("less than 500")
// } 
// else if (balance<750) {
//     console.log("less than 750");
// } 
// else if(balance<900){
//    console.log("less than 900")  
// }
// else{
//     console.log("less than 1200")  
//  }

const userLoggedIn=true
const creditCard=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true

if(userLoggedIn && creditCard ){          // &&(AND) depicts both should be true
    console.log("Can purchase items")
}
if (LoggedInFromGoogle || LoggedInFromEmail) {  // ||(OR)depicts any of the true
    console.log("User Logged in")
}