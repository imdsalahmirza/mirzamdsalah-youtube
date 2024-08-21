// javacript date object define single moment in platform- independent format
// date usually calculate in milliseconds


let mydate = new Date()   
console.log(mydate);                  // 2024-08-21T12:39:05 PM
console.log(mydate.toString());       // Wed Aug 21 2024 12:39:05 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleString()); // 8/21/2024, 12:39:05 PM
console.log(mydate.toLocaleDateString())    //    8/21/2024
console.log(mydate.toLocaleTimeString())  //    12:55:25 PM
console.log(mydate.toDateString())  // Wed Aug 21 2024
console.log(mydate.toISOString())   // 2024-08-21T13:22:37.721Z
console.log(mydate.toJSON())     // 2024-08-21T13:22:37.721Z 

console.log(typeof mydate );               // date is object


let otherdate = new Date(2024, 0 , 21)
console.log(otherdate);      // 2024-01-21T00:00:00.000Z
console.log(otherdate.toDateString());  // month start from 0 in java-script and sun automatically

let anotherdate = new Date(2024, 0 , 21,  5,  3,  27, )
console.log(anotherdate.toLocaleString());        // 1/21/2024, 5:03:27 AM

let anotherdate1 = new Date("2024-01-14") // DD/MM/YY MONTH START FROM 1  BUT IN SINGLE START FROM 0 //
console.log(anotherdate1.toLocaleString());

let todaydate = new Date("01-14-2024") // we prefer to use mm/dd/yy mostly in india
console.log(todaydate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(todaydate.getTime())
console.log(Math.floor(Date.now()/1000))


                    
