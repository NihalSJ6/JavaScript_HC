// Higher order array loops

const arr = [1,2,3,4,5]


//for of loop

//for(const iterator of object) -> here, object matlab kis cheez 
// ke upar loop lagana hai
for (const val of arr) {
    //console.log(val);   
}


//Maps -> unique and ordered
const map = new Map()
map.set('IN',"India")
map.set('USA', "America")
map.set('Fr','France')
map.set('IN',"India")

// console.log(map);



//kinda array destructuring
for (const [key,value] of map) {
   // console.log(key, ":-", value);
}



//Object d.t
// const myObject = {
//     game1: 'nfs',
//     game2 : 'vicecity',
// }

// for (const [key,value] of myObject) {
//     // console.log(key, ":-", value);
// }
//throws error



const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
}




//for in -> iterable on object
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
//returns keys in the object


arr1 = [1,2,3,4,5,6]

for (const key in arr1) {
    //console.log(arr1[key]);
}
//(for in) -> for arrays, it returns keys (indexes), 
// unlike (for of) which directly returns values in an array


//(for in) can't be iterable on map




//for each
const coding = ["js", "ruby", "cpp", "Python", "java"]

coding.forEach(function (val) {
    //console.log(val);    
})


coding.forEach((item) => {
    //console.log(item);
})


function printMe(item) {
    //console.log(item); 
}

coding.forEach(printMe) //just give reference of function as call-back


coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr); 
} )




const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py",
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})

//in forEach we can't return anything even if we want to