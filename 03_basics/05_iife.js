//immediately invoked funtion expression

// IIFEs (Immediately Invoked Function Expressions) are used to create a private scope, preventing variables from
// polluting the global namespace and avoiding naming conflicts


//To execute 2 or more IIFE'S , semicolon at last is must
(function chai() {
    //named IIFE
    console.log('DB CONNECTED');
})();   //semicolon important bigiluuuuu😂



( () => {
    console.log('DB CONNECTED TWO');
    
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('Nihal');





//Example of IIFE
var globalVar = 'I am Global'
console.log(globalVar);


(() => {
    var globalVar = 'I am local inside IIFE'
    console.log(globalVar);
})();


console.log(globalVar); //PRINTS 'I am global'
//local globalVar inside IIFE does not pollute globalVar declared in global scope
