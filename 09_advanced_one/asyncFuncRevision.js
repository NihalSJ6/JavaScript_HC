//callback example

// function square(n) {
//     console.log("square called");
//     return n*n
// }



// function cube(n) {
//     console.log("cube called");
//     return n*n*n
// }


// function sumOfSomething(a,b, callbackfn) {
//     let n1 = callbackfn(a);
//     let n2 = callbackfn(b);
//     return n1 + n2;
// }


// let ans = sumOfSomething(2,3, square)
// console.log(ans);

// let ans1 = sumOfSomething(2,3,cube)
// console.log(ans1);



//Basic Async example
const fs = require("fs")


//Example-1
// fs.readFile("a.txt", "utf-8", function(err, data) {
//     console.log(data);
// })

// console.log("hi there");


//Example -2
console.log('Hi there');

setTimeout(function timeout() {
    console.log('Click the button!');  
}, 5000)


let ans = 0
for (let i=0; i<10; i++) {
    ans = ans+i;
}

console.log(ans);

console.log("Hi there 2");

