function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));   //for ...num1 parameter, you can give as many arguments as you want while callig it
//val1 -> 200 , val2 -> 300, so return num1 -> 400 , 500


const user = {
    username : 'nihal',
    price : 200,
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) //1st way of calling function

//2nd way of calling function
handleObject({
    username : 'Nihal',
    price : 200,
})


const myNewArray = [200,300,400,500,600]

function returnSecondValue(getArray) {
    return getArray[4]
}

//1st way
// console.log(returnSecondValue(myNewArray));

//2nd way
console.log(returnSecondValue([200,300,400,500,600]))