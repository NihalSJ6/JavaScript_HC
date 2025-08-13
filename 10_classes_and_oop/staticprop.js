class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}


const nihal = new User("nihal")
//console.log(nihal.createId()) //throws error

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const Rudra = new Teacher("snoopy", "i@phone.com")
Rudra.logMe()