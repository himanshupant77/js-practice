
const User={}

User.id="Sam123"
User.name="sammy"
User.age=33

// console.log(User)

const User2 ={
    email:"dan@gmail.com",
    fullname:{
        userfullname: {
           firstname:"danny",
           lastname:"kumar",
        }
    }

    // name:"Danny",
    // age:32,
    // isUser2LoggedIn: false
}
// console.log(User2.fullname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3=Object.assign({},obj1,obj2)    //combines 2 objects using assign
const obj3={...obj1,...obj2}                //combines 2 objects using spread operator
console.log(obj3)
