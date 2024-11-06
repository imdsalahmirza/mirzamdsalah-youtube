// all the code rap in the package 

// console.log("s")
// console.log("a")
// console.log("l")
// console.log("a")
// console.log("h")

function myname(){
    
    console.log("s")
    console.log("a")
    console.log("l")
    console.log("a")
    console.log("h")
}

// myname()

// function addTwonumbers(number1, number2){  // this is parameters

//     console.log(number1 + number2);
// }

function addTwonumbers(number1, number2){  

    // let result = number1 + number2
    // console.log("salah");
    // return result       // After return function will not support any of your work.
    // console.log("mirza");
    return number1 + number2
    
}

const result = addTwonumbers(3, 4)  // this is arguments

// console.log("Result: ", result);

// function loginusermessage (username){
//     // let result  = `${username} is my name`
//     // return result
//     return `${username} is my name`

// }
// function loginusermessage (username){
//     if(username===undefined){   // this code is run when your situation evaluate in true
//         // ! this symbol is not symbol (!) this convert true into false , false into true
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`

// }
function loginusermessage (username = "sam"){
    if(!username){  
        console.log("please enter a username");
        return
    } 
    return `${username} just logged in`

}
        // this code is run when your situation evaluate in true
        // ! this symbol is not symbol (!) this convert true into false , false into true
        // undefined consider as false value and this block is not use for false 
        // and this (!) symbol convert undefined into true
        // but if you want to avoid this type of situation so you
        // can give default value.
        // for ex username = "sam" in parameters after that there is no need go in if(){} block 
        // because there is no chance that your value will print as undefined.
    
  

console.log(loginusermessage()) // if value (argument) not pass so its undefined
