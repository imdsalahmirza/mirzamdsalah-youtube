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
console.log(anotherdate1.toLocaleString());      // 2024-01-21T00:00:00.000Z

let todaydate = new Date("01-14-2024") // we prefer to use mm/dd/yy mostly in india
console.log(todaydate.toLocaleString());   //  sun jan 21 2024
                                           
let mytimestamp =  Date.now()
console.log(mytimestamp)                       //1728219872873
console.log(todaydate.getTime())                      // 1703628736272
console.log(Math.floor(Date.now()/1000))             // 1724308262

let Newdate = new Date()
console.log(Newdate)
console.log(Newdate.getDay())     // 4
console.log(Newdate.getFullYear())    // 2024
console.log(Newdate.getHours())       // 4
console.log(Newdate.getDate())     // 22
console.log(Newdate.getMonth() + 1 )  // 8


'${Newdate.getDAY()} and the time is' 

console.log(Newdate.toLocaleString('default', {
    weekday: "long"
}))                                               // Thursday
                    
// Newdate.toLocaleString('default', {weekday: "long"})

                    

            

                    
                    

                    
                    
