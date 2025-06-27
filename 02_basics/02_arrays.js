const marvel_heros = ['thor','ironman','spiderman']

const dc_heros = ['superman','batman','flash']

// marvel_heros.push(dc_heros) //appends new element to the end of array
// console.log("A ",marvel_heros);

// const newHeroArray = marvel_heros.concat(dc_heros) //combines 2 or more arrays
// console.log("B ",newHeroArray);


//spread operator - no matter how many arrays, can combine all of them , better than concat for c
// combining arrays
const all_New_Heros = [...marvel_heros, ...dc_heros]
console.log(all_New_Heros);


//multiple arrays inside an array -> use flat operator
const another_array = [1,2,3, [4,5,6] ,7, [6,7, [45,67]]]
const real_another_array = another_array.flat(1)
const real_another_array1 = another_array.flat(Infinity)
// console.log("C ",real_another_array);
// console.log("D ",real_another_array1);


console.log(Array.isArray("Nihal")) //returns false
console.log(Array.from("Nihal Jasti")); //from creates an array from an iterable object
console.log(Array.from({name : "nihal"})); //returns empty arr , as the parameter passed isn't iterable


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returns a new arr from a set of elements



