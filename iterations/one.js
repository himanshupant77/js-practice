// for loop

for (let index = 0; index < 10; index++) {     // loops
    const element = index;
    if (element==5) {
  //      console.log("No. 5 arrived")
    }
    // console.log(element);
}

for (let i = 0; i <= 10 ; i++) {               // loops inside loops
//    console.log(`outer loop value ${i}`);
     for (let j = 0; j <= 10; j++) {
//    console.log(`inner loop value ${j} and outer loop ${i}`);
     }    
}

let myArray=["flash", "superman","batman"]     // array in loops
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected ${index}`)
        break                                   // it stops initialisation after
    }
    console.log(`value of index is :${index}`)
}



for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected ${index}`)
        continue                                  // skip only one iteration 
    }
    console.log(`value of index is :${index}`)
}
