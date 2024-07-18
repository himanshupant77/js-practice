const marvel_hero = ["thor" , "ironman", "spiderman"]
const dc_hero = ["flash" , "superman", "batman"]

// marvel_hero.push(dc_hero)     //combine array by push but problem as array stored inside array
// console.log(marvel_hero)

//let array=marvel_hero[3]
//console.log(array)
// console.log(marvel_hero[3][1])

// const all_hero=marvel_hero.concat(dc_hero)  //combine array by concat , good method
// console.log(all_hero)

const all_hero_2= [...marvel_hero, ...dc_hero]  //spread opearator works same as concat but easier 
// console.log(all_hero_2)

const another_array=[1,2,3,[4,5,6],7,[6,7,[8, 9 ]]]
const another_array_2=another_array.flat(5)
// console.log(another_array_2)
// console.log(another_array)

console.log(Array.isArray("himanshu"))  // asks if it is array or not
console.log(Array.from("himanshu"))     // makes it array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))