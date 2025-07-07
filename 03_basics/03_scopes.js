let a = 300

if (true) {
    let a = 30
    const b = 20
    // console.log('Inner:', a);
}

// console.log(a);



//nested scope -> children functions can access variables of parent function
//but vice-versa cannot happen

function one() {
    const username = 'nihal'

    function two() {
        const website = 'youtube'
        console.log(username);
    }

    // console.log(website); //error -> can't access variable outside its scope

    two()  
}

one()




if (true) {
    const username = 'nihal'
    if (username === 'nihal') {
        const website = 'youtube'
        console.log(username + website);
    }
    // console.log(website); //error  
}

// console.log(username); //again returns error -> var username out of scope myann


