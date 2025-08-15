//Object and its properties as parameters
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //PI value const -> writable : false

//console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function() {
        console.log("Chai nahi bni");
        
    }
}

//console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Changing name property -> writable and enumerable to false
Object.defineProperty(chai, "name", {
    writable :false,
    enumerable : false
})


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// enumerating/iterating object
for (let [key,value] of Object.entries(chai)) {
    if (typeof value != ('function')) {
        console.log(`${key}, ${value}`);
    }
}
