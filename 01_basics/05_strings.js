// String interpolation -> modern way to write code for strings

// Javascript strings are primitive and immutable: 
// All string methods produce a new string without altering the original string.

const name = 'nihal' //String
const repoCount = 50

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


console.log(typeof name) //returns string

const gameName = new String('nihalNJ') // String object

console.log(gameName);
console.log(typeof gameName); //returns object

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('N'));
console.log(gameName.toUpperCase());



console.log(gameName); //actual value never changes cuz call by value -> primitive

//type coercion ka mela
let s1 = 'Aneesh'
let s2 = new String('Aneesh')

console.log(s1==s2); //loose equality check -> returns true
console.log(s1 === s2); //strict equality check -> returns false

const newStringOne = "    nihal   "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes all spaces


const url = "https://nihal.com/jasti%20Chowdhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('singh'));

