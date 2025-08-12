//.then() -> handles promise's fulfillment
//.catch() -> used for error handling in promise chains
//.finally() -> executes regardless of whether promise is fulfilled or not


// We use Promises to avoid callback hell especially in asynchronous code

//1st Promise
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB Calls, cryptography, network calls, //fetching data from API's, file I/O operations

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
    
})


//2nd Promise
//consuming promise -> to consume, resolve needs to be called
promiseOne
.then(function() {
    console.log("Promise consumed");
})


new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Async task 2"); 
        resolve()    
    }, 1000)
})
.then(function() {
    console.log("Async 2 resolved");
})



//3rd Promise
const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve({'user': 'Nihal', 'email' :'nihal@example.com'})
    }, 1000)
})


promiseThree
.then(function(user) {
    console.log(user);
})



//4th Promise
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username : "nihal", password : "123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }  , 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
    
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})



//5th Promise
const promiseFive = new Promise((resolve, reject) => {
        setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username : "nihal", password : "123"})
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }  , 1000)
})


//async and await
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }  catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



//6th Promise

// async function getAllUsers() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);   

//     }   catch (error) {
//         console.log("E: ", error);

//     }
// }

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

