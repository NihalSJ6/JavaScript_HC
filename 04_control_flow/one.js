const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log('Allow to buy the course');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('user loggen in');
}