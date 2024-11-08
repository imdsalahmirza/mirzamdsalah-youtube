
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
    // console.log("inner: ",a);   // outside the scope is global scope and inside is block scope
    
}


// console.log(a);
// console.log(b);
// console.log(c);

// global scope in brower is different than  global scope in node.....
// global scope value can be available under the scope but inner scope should not go outside the scope..


// *********************************************************************************************
 
// nested scope

// child function can exces parent variable but child variable should not be axces by parent function


function one(){
    const username = "salah"

    function two(){
        const website = "youtube"
        // console.log(username)
          
    }

    // console.log(website);
    two()   
}

one()

if (true) {
    const username = "salah"

    if (username === "salah"){
        const website = "youtube"
        // console.log(username +  website);   
        // console.log(website);
         
    }
    // console.log(website);
    // console.log(username);
    
}

// console.log(username);


// ****************************INTERESTING*******************************

console.log(addone(10))

function addone (num) {
    return num + 1
}
 

const addtwo = function(num){
    return num + 9
}

console.log(addtwo(6))


