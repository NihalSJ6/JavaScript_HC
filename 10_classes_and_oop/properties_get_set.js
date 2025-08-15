function User(email,password) {
    this._email = email;
    this._password = password;


    //define or modify a property of an object
    Object.defineProperty(this, 'email', {
        get : function() {
            return this._email.toUpperCase()
        },

        set : function(value) {
            this._email = value
        }
    })


    Object.defineProperty(this, 'password', {
        get : function() {
            return `${this._password}nihal`
        },

        set : function(value) {
            this._password = value
        }
    })
}


const chai = new User("nsj@gmail.com", "123")

console.log(chai.email);
console.log(chai.password);

