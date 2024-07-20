// object literals
 
const User = {
     name:"himanshu",
     "full name":"himanshu pant",    //special case
     age:22,
     email:"himanshu@gmail.com",
     location:"ghaziabad",
     isLoggedIn: false
}
// console.log(User.email)
// console.log(User["email"])        //2nd way to call object
// console.log(User["full name"])

User.email="himanshu@yahoo.com"   //changes value in object
// console.log(User.email)

// Object.freeze(User)               //freezes the object , no change allowed
// User.email="himanshu@hotmail.com"  // changes will not been make now 
// console.log(User.email)
// console.log(User.isLoggedIn)


User.greetings=function(){
    console.log("Hello User")
} 
User.greetingsTwo=function(){
    console.log(`Hello User ${this["full name"]}`)
}

// console.log(User.greetings())
// console.log(User.greetingsTwo())

console.log(User)