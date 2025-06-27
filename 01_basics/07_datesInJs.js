let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
console.log(myDate.getTime());
console.log(myDate.getMonth()); //returns index , 5 -> June only
console.log(myDate.getDay());  // day of the week - 5 (Friday)



let myCreatedDate = new Date(2025,5,20)
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());



let myCreatedDate1 = new Date(2025,5,20, 6,6)
// console.log(myCreatedDate1.toLocaleString()); 

let myCreatedDate2 = new Date("06-20-2025")

let myTimeStamp = Date.now() //reutns number of millisec since 1970

console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());

console.log(Math.floor(Date.now()/1000)); //milliseconds to seconds

