
// {}                this curly braces called scopes almost in all prgramming language
                //  But in object {} this is not scope thats object decleration.
// var c = 300
// if (true){
//     let a = 30
//     const b = 40
//      c = 50
// }

let a = 300
if (true){
    let a = 30
    const b = 40
    console.log("inner: ",a);   // outside the scope is global scope and inside is block scope
    
}


console.log(a);
// console.log(b);
// console.log(c);

// global scope in brower is different than  global scope in node.....
// global scope value can be available under the scope but inner scope should not go outside the scope..