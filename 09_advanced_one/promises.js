const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB Calls, cryptography, network calls, //fetching data from API's, file I/O operations

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
    
})

//consuming promise -> to consume, resolve needs to be called
promiseOne.then(function() {
    console.log("Promise consumed");
})


