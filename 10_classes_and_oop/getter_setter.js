class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}nihal`
    }

    set password(value) {
        this._password = value;
    }

}

const nihal = new User("nsj@gmail.com","123")
console.log(nihal.password)
console.log(nihal.email);

