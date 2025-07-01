//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "nihal",
    "full name" : "Nihal Sanjay Jasti",
    [mySym] : "myKey1",
    age : 18,
    location : 'Hyderabad',
    email : 'nsj@gmail.com',
    isLoggedIn : false,
    lastLogginDays : ['Monday','Saturday']
}

//keys automatically considered as string


//accessing Objects
// console.log(JsUser.email)
// console.log(JsUser["email"]);

// console.log(JsUser.full name);  
//throws error , can't access keys , specifically written as string like "full name" through .

// console.log(JsUser["full name"]); 
//this is the way to access key specied as string particularly like "full name"

// console.log(JsUser[mySym]);
// console.log(typeof(JsUser[mySym])); //mySym not being a Symbol d.t here,it is string d.t
//to resolve the issue the var should be written as [mySym] while being declared as key in an object


// JsUser.email = 'nsj@google.com'
// Object.freeze(JsUser) //freezes the object
// JsUser.email = 'nsj@chatgpt.com'
// console.log(JsUser);


// we call and add properties dynamically also in an object
JsUser.greeting = function() {
    console.log('Hello JS user');
}

console.log(JsUser.greeting); //just references function
console.log(JsUser.greeting()); //calling the function and executing it

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

