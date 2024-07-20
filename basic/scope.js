
if (true){

    let a=10
    const b=20
    var c=30
    
}

// console.log(a)
// console.log(b)
// console.log(c)

if (true) {
    const firstname="himanshu"                
    if (firstname=="himanshu") {               // functions called inside a functions  
       const lastname=" pant"                 // child can take values from parent but not vice versa 
     // console.log(firstname+lastname)      // this property is called closure.
    }
    // console.log(lastname);               // will give error because declared out of scope   
}

//  INTERESTING ***********
 
addone()                          //function declaration this type supports hoisting 
function addone(num){
    return num +1
}


addTwo()                          //declaring function this type dosnt support hoisting
const addTwo= function(num){
    return num + 2
}  
