const user={
    username:"himanshu",
    price:999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
    }
}

//user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


const one = function(){
    let username="himanshu"
    console.log(this)
}
// one()

// const one = () => {                   //arrow function
//     let username="himanshu"
//     console.log(this)
// }
// one()


// const sum = (num1,num2) => {         //normal arrow function
//      return num1+num2
// } 
// console.log(sum(4,5))

const sum1 = (num1,num2) => num1+num2   //implicit return (no need to use return keyword)
console.log(sum1(4,5))