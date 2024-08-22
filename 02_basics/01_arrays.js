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
const maulanas = ["nusrat bukhari", "alirazarizvi"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0])