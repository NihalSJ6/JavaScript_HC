//this keyword => current context

const user = {
    username : 'nihal',
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);   //returns current context, depending upon the function call
        
    }
}


// Object properties are not private variables; they are accessible and mutable externally.
// user.welcomeMessage()  //this 
// user.username = 'aneesh'
// user.welcomeMessage()

// console.log(this);   //returns empty , as this referring to empty object, as there is no global context



function coffee() {
    const username = 'nihal'
    console.log(this); //references global obj 
    console.log(this.username); //returns undefined as (this)->here refers global object
}

// coffee()
//So, functions ke andar context kaam nahi karta utna


const chai = () => {
    let username = 'nihal'
    console.log(this.username); //returns undefined
    console.log(this); //again {} empty obj
}

// chai()


//syntax sugar ->1
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,3))



//[syntax sugar -> 2] (implicit return) -> no need to use return
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,3));

const User = (num1 , num2) => ({username : 'nihal'})
console.log(User())