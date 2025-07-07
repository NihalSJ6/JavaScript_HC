const userEmail = 'nsj@100.ai'  //if empty string -> false value


if (userEmail) {
    console.log('valid user mail');
}

else {
    console.log('invalid user email');
}


//falsy values -> false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//baki sab truthy values

//examples of truthy values -> "0", 'false', " ", [], {},  function() {}

const userEmail1 = [0]


//Syntactical sugar -> semicolon must
//checking whether array is empty or not
if (userEmail1.length === 0)  console.log("array is empty");   //array.length property used here

else  console.log('nope');



const emptyObj = {1 : "", 2: "", 3:""}

console.log(Object.keys(emptyObj)) //returns array of keys of object


if(Object.keys(emptyObj).length === 0)  console.log("Object is empty");

else console.log("Object isn't empty");



//Nullish Coalescing operator (??) : null undefined

// The nullish coalescing (??) operator is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

// console.log(val1);


// Ternary operator ->   condition ? trueExpression : falseExpression
const ChaikaDhaam = 100
ChaikaDhaam >= 75 ? console.log("yes it is") : console.log("No it isn't");


//example 2 -> Ternary operator
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Ahhh, Hi ${name}`
}

// console.log(greeting({name : "Nihal"}))
console.log(greeting())
