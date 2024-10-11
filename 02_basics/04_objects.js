const tinderuser = new Object() // singleton object

// const instauser = {}  // not a singleton object

// console.log(instauser)

tinderuser.Id = "123abc"
tinderuser.name = "salah"
tinderuser.isloggedIn = false 
// console.log(tinderuser) 

const snapuser = {
    email: "mirzamdsalah@gmail.com",
    fullname: {
        userfullname: {
            firstname: "salah",
            lastname: "mirza"
        }
    }
}

console.log(snapuser.fullname.userfullname.lastname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}
 
//const obj3 = {obj1 , obj2}

 //const obj3 = Object.assign({}, obj1, obj2, obj4) 
 // it is not compulsary, but when you not give that braces
 // so it means your all value directly going to obj1. empty obj is target & all value is source.

const obj3 = {...obj1, ...obj2, ...obj4}  // spread operator
console.log(obj3);

const user = [      // data base value, lot of obj in array
    { 
        id: "1234",
        email: "mirza@gmail.com"
    },
    { 
        id: "1234",
        email: "mirza@gmail.com"
    },
    { 
        id: "1234",
        email: "mirza@gmail.com"
    }
]

user[1].email

console.log(tinderuser)

console.log(Object.keys(tinderuser)) //all keys put in array most imp and interesting
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser)) // rarely used

console.log(tinderuser.hasOwnProperty('isloggedIn')) // true
console.log(tinderuser.hasOwnProperty('logged')) // false