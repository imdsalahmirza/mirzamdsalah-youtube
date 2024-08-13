//  types data categories
// how to put data in memory and do excess (1) primitive (2) not primitive


//  primitive      [call by value]    (change in copy not original)

// 7 types : string , Number , Boolean , Null , Undefined , Symbol , Bigignt


// java script is dynamically types language because java is not defines any language.

const Id = Symbol('123');
const anotherId = Symbol('123');

console.log (Id === anotherId);

//const bignumber = 897897987798798789990n (bigint)

// Reference (Non primitive)

// Array , Objects , Functions

// array
const maulanas = ["nusratbukhari" , "alirazarizvi" , "arifhussain"]

//objects...... you can store in variables as well

let myobj = {
   name: "salah",
   age: 21,  
}

// function ...... you can store in variables as well
const myfunction = function(){
    console.log("hello world");
}


console.log(typeof myfunction)
console.log(typeof maulanas)


// function return function ,  but it is actually called functionobject //
// All non primitive data types are called function



//link_____ type of operator ecma....


// =============================================================================================//

// stack (Primitive) , Heap (Non-Primitive)

let myyoutubename = "salah@gamil.com"

let onothername = myyoutubename 

onothername = "ayan@gmail.com"

console.log(onothername)
console.log(myyoutubename )

let userOne = {
    email: "user@google.com"
}

let userTwo = userOne

userTwo.email = "user@amazon.com"

console.log(userTwo.email )
console.log(userOne.email )

// all primitive value is in stack it works in copy
//all non primitive value is in heap in heap there is direct reference and change in original value