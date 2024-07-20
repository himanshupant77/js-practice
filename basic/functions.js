function name(){
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
}
// name()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNumber(3,4)

function addTwoNumber(num1,num2){
     let result=num1+num2
     return result
}

const result= addTwoNumber(3,5) 
// console.log(result)


function LoginUser(username){
     if(username===undefined){
        console.log("Enter User Name")
        return
     }
    return `${username} just logged in`
}

// console.log(LoginUser())                 //if no username given
// console.log(LoginUser("Himanshu"))

function calculateCartPrice(...num1){    //...num1 used as rest operator
    return num1
}
// console.log(calculateCartPrice(200,300,500))


const user={
    username:"himanshu",          //functions in objects
    price:199
}

function handleObjects(anyobject){
    return `Username is ${anyobject.username} and price is ${anyobject.price}`
}
// console.log(handleObjects(user))


const array=[200,400,600]

function secondValue(getArray){
    return getArray[1]
}

console.log(secondValue(array))