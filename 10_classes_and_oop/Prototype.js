// let myName = "ni hal    "


let myHero = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function() {
        console.log(`spidey power is ${this.spiderman}`);
    }
}


Object.prototype.nihal = function() {
    console.log("nihal is present in all objects");
}


//heroPower.nihal()
//myHero.nihal()



/*
When some method is passed in Object through prototype -> 

arrays, strings, and others can also access those methods without explicity
 initialising and declaring them

This only happens with Object, as every other thing is connected 
to Object (High-level hierarchy)

If we create a method using prototype in Array, we cannot access the same method 
through Object, throws error

*/




//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport 
    //can access properties of TeachingSupport using __proto__
}


Teacher.__proto__ = User  //Teacher obj accessing properties of User obj 
Teacher.name = 'Nihal'
//console.log(Teacher);


let anotherUsername = "nihal jasti      "

String.prototype.trueLength = function() {
    console.log(`${this}`);  //this ka matlab jis
    console.log(`True length is : ${this.trim().length}`);
}


anotherUsername.trueLength()

"ChaiAurCode   ".trueLength()

"Hitesh SIR  ".trueLength()