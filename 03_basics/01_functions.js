// function addTwoNumbers(num1, num2) {
//     //console.log(num1 + num2);
// }

//  const result = addTwoNumbers(3,5)


// console.log("Result: " , result);    //return type undefined



function addTwoNumbers(num1, num2) {
    return num1 + num2
    console.log("Nihal");     //any code after return doen't get executed
}

const result = addTwoNumbers(3,6)
// console.log("Result:",result);




function loginUserMessage(username) {
    if(!username) {
        console.log("Please provide a username"); 
        return
    }
    
    return `${username} just logged in`
}

//with argument
const result1 = loginUserMessage("Nihal")

// console.log(result1);
// console.log(typeof result1); //returns string

// console.log("Result:", result1);   //if you don't return anything, it returns undefined


//without argument
console.log(loginUserMessage())   //if you don't pass an argument, it will be undefined




