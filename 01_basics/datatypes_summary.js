//Primitive - String, Number, Boolean, null, undefined, Symbol, BigInt

//all primitive data types are call by value => copy of the value is created when a primitve
// datatype is passed as a parameter to a func

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
console.log(typeof outsideTemp); //returns object


let userEmail; //undefined
console.log(typeof userEmail); //returns undefined

//Even if the values passed inside Symbol is same, they are different/unique
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); //returns false, that means they aren't same


//BigInt
const bigNumber = 234565434564356754675n;
console.log(bigNumber);
console.log(typeof bigNumber); //bigint




// Reference - array, objects, functions

//reference to original object is passed, so any modification inside the func will affect
// the object outside the function

const heros = ['ironman', 'superman', 'batman', 666]
console.log(typeof heros);



let myObj = {
    name : "nihal",
    age : 22,
}
console.log(myObj);
console.log(typeof myObj); //returns object

const myFunction = function() {
    console.log("Hello jii");
}

 console.log(typeof myFunction); //returns function

 

 //Stack (Primitive), Heap (Non-primitive)


 //STACK
let myName = "nihaljasti"
let anotherName = myName 
//copy of stack where value of var myName stored is 
//created -> call by value
anotherName = "aneeshjasti" 

console.log(myName) //returns nihaljasti
console.log(anotherName); //returns aneeshjasti cuz call by value


//HEAP
let userOne = {
    email: "nsj@gmail.com",
    upiId: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aneesh@gmail.com"

console.log(userOne.email); // returns "aneesh@gmail.com"
console.log(userTwo.email); //returns "aneesh@gmail.com" cuz call by reference

