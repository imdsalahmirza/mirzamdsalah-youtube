// singleton
// object.create



// object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "salah",
    "full name": "salah mirza",
    [mysym]: "key1",             // without brackets it is string , 
    // but if you wanmt to refer symbol then you should use square bracket
    age: 22,
    location: "navimumbai",
    email: "mirzamdsalah@gmail.com",
    Isloggedin: false,
    lastlogindays: ["Monday", "saturday"]

}
//jsuser.email = "salah@chatgpt.com"     //...... value change
//Object.freeze(jsuser)                  // if you want no one will change the value so yuo can put freeze
jsuser.email ="slaha@microsoft.com"
// console.log(jsuser)



// console.log(jsuser["full name"])
// console.log(jsuser[mysym])
// console.log(jsuser["email"])


jsuser.greeting = function(){  
    console.log ("hello js user") 
}


jsuser.greetingtwo = function(){  
    console.log ('hello js user , ${this.name}')
}

console.log(jsuser.greetingtwo())
console.log(jsuser.greeting())


