const score = 400
// console.log(score);
// console.log(typeof score);


const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);


// console.log((balance.toString().length))
// console.log(balance.toFixed(3));


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ************ Maths **************

console.log(Math);
console.log(Math.abs(-4)) // negative to positive
console.log(Math.round(4.4)); // < 0.5 -> floor, >= 0.5 ->ceil
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));


console.log(Math.random()); //pseudo number between 0 to 1

console.log(Math.random() * 10 + 1); //number atleast >1 (+1)

console.log(Math.floor(Math.random() * 10 + 1))

