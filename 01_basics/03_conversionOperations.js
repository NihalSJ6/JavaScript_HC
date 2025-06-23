// let score = "33"
// let score_1 = "33abc"

// console.log(score);  //returns 33
// console.log(typeof score); //string datatype


// let valueInNumber = Number(score_1)
// console.log(typeof(valueInNumber)); //string to number✅
// console.log(valueInNumber); //for 33abc , returns NaN  & for 33 it returns 33 in number datatype

// // strings like "33" are converted to numbers easily, 
// // but "33abc" => when we log typeof(33abc) it shows as a number,but when we log the actual value, it shows NaN



// let value = null
// console.log(typeof(null)); //returns object

// let nullToNumber = Number(value)
// console.log(nullToNumber);  //returns 0
// console.log(typeof(nullToNumber)); // boolean to number✅





// let value_2 = undefined
// console.log(value_2); //returns undefined

// let undefinedToNumber = Number(value_2)
// console.log(undefinedToNumber); //returns NaN
// console.log(typeof(undefinedToNumber)); //undefined to number✅



// //Boolean
// let isLoggedIn = "nihal"
// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn); //returns true


//1 => true  , 0 => false ,  "" => false,  "nhal" => true


// ********** OPERATIONS *******************

let str1 = "nihal"
let str2 = "jasti"

let str3 = str1 + str2
console.log(str3);


console.log(true); //returns true
console.log(+true); //returns 1
//console.log(true+); //returns error

let gameCounter = 100;
y = gameCounter++;
console.log(y); //returned and not yet incremented, so returns 100
console.log(gameCounter); //incremented and returned, returns 101

let x = 100
let z = ++x;
console.log(x); //incremented and returned, returns 101
console.log(z); //incremented and returned, returns 101





