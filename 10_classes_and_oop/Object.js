function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


//createUser -> constructor function
function createUser(username, score) {
    this.username = username
    this.score = score
}

//adding increment method to createUser Prototype
createUser.prototype.increment = function() {
    this.score++; //this ka matlab jisne bhi bulaya
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}


//without new, object instance can't read properties of methods created as this referes to global object
//with new, this refers to newly created object instance

const chai =  new createUser('nihal', 25)     //first instance
const coffee = new createUser('aneesh', 250)  //second instance

chai.increment()
chai.printMe()
coffee.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/