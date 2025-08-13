function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}


function createUser(username, email, password) {
    SetUsername.call(this,username) //apna wala this hai, not the global this object

    this.email = email
    this.password = password
}
//here (this,) -> ensures that this context is explicitly set to the object being created by createUser i,e chai


const chai = new createUser("nihal", "nsj@example.com", "123")
console.log(chai);
