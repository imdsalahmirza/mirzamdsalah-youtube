// parenthises = ()
// brackets = [] 
// braces or curly-braces = {}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// array


// it is not compulsary that element must be same it can be different.
// In javascript array is resizable , once you declare it doesn't mean that you can add more elements
// Can be mix different data-types (for-ex --- numbers, boolean, string , object, array  )
// Arrays indexing start with 0 doesn't matter what is first element , firts element indexing with 0

///==========interview question================///

// arrays in javascript when yuon do copy-operation so this create shallow copy rather than deep copy
// shallow-copy==== of an object whose properties share the same reference
// means what you change will change in original array copy aswell.
// deep-copy=== properties do not share the same reference


const myArr = [0, 1, 2, 3, 4, 5]
//const maulanas = ["nusrat bukhari", "alirazarizvi"]

//const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);


// Array methods

//myArr.push(6) 
//myArr.push(7)
//myArr.pop() // remove last value in array
//myArr.unshift(9)
// myArr.shift()


//console.log(myArr.includes(9))
//console.log(myArr.indexOf(9))        //if its not exist its value -1


//const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr)
//console.log(typeof newArr)

// slice , splice 

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3) // slice does not print last range, (not included)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)  // splice print last range, (included)
console.log("C ", myArr)      // portion removed from splice and original array is manupulated.      
console.log(myn2)    



///=============================[difference between slice and splice]====================================///

// After using slice original array will not be disturbed and print same as original. slice manupulated orinal value
// (After using splice original array will be disturbed and manupulated and not print same as original 
// also remove splice portion.)





