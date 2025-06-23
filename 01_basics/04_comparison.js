console.log("2"> 1); //returns true✅
console.log("02">1); //returns true✅

// JavaScript attempts to convert the string to a number before
// performing the comparison.




//null implicitly converted to 0 for >, <, >=, <=
console.log(null > 0); //false as 0 can't be > than 0
console.log(null == 0);  //false because null loosely equal to undefined when ==

//loose equality check , null == undefined(returns true, 
// or else returns false in other cases)

console.log(null==undefined); //true as null loosely equal to undefined
console.log(null >= 0); //true as ,here null = 0 implicitly


console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false


//strict equality checks (===) => null will remain null
console.log(null===null); //true
console.log(null === undefined); //false
console.log(null===0); //false



