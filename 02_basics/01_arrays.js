//array

const myArr = [0,1,2,3,4,5]
const myArr1 = [0,1,2,3,'nihal', [23,45]]

// console.log(myArr);
// console.log(myArr1);

// console.log(typeof myArr);
// console.log(typeof myArr1);

//Array methods
myArr.push(6) 
myArr.push([23,55])
// console.log(myArr);

myArr.pop()
// console.log(myArr);


myArr.unshift(9) //inserts at 0th position 
// console.log(myArr);

myArr.shift() //pops at 0th position
// console.log(myArr);

const newArr = myArr.join()
//A string used to separate one element of the array from the 
// next in the resulting string. If omitted, the array elements 
// are separated with a comma.

// console.log(newArr);
// console.log(typeof newArr);


//slice , splice

console.log("A ", myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1); //index 3 excluded


console.log("B",myArr); //slice does not however manipulate the original array

const myn2 = myArr.splice(1,3) //index 3 also included
console.log(myn2); 
//also splice manipulates the original array, permanently cutting down the index range specified

console.log("C ",myArr);


