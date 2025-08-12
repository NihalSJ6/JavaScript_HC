//JavaScript uses a prototype-based inheritance model. Objects inherit 
// properties and methods directly from other objects (their prototypes).


//Object Literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this); //this current context is user object now
    }
}


// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}


const userOne = new User("hitesh", 12, true) //new creates new instance of User 
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //constructor property acts as reference to User function
console.log(userTwo);
 
//if we don't use new, then data is over-written creating a mess


