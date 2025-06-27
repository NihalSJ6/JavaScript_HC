
//const tinderUser = new Object() ->singleton object
const tinderUser = {}  //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = 'Nihal'
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(typeof tinderUser);

const regularUser = {
    email : 'nsj@gmail.com',
    fullname : {
        userfullname : {
            firstname : 'nihal',
            lastname : 'sanjay',
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1 : "a", 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}
const obj4 = {5 : 'e', 6 : 'f'}

//const obj3 = {obj1, obj2} //arrays wala problem ho jayega

// const obj3 = Object.assign({}, obj1, obj2, obj4)  //target -> {}.  , [obj1, obj..] -> source
//Object.assign is a target object which copies from 1 or more source object
//It returns the modified target object

//console.log(obj3);


const obj3 = {...obj1 , ...obj2} //spread
//console.log(obj3);



const users = [
    {
        id1 : 1, 
        email : 'n@gmail.com'
    }, 

     {
        id1 : 1, 
        email : 'n@gmail.com'
    }, 

     {
        id1 : 1, 
        email : 'n@gmail.com'
    }, 

     {
        id1 : 1, 
        email : 'n@gmail.com'
    }, 
]
console.log(users[1].email)


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




