function calculatecartprice(val1, val2, ...num1){  // rest operator not spread operator
    return num1
}

// console.log(calculatecartprice(500, 200, 600, 2000))

const user = {
    username: "salah" ,
    price: 999

}

function loginmyuserid (anyuserobject){

    console.log(`my user name is ${anyuserobject.username} and my price is ${anyuserobject.price}`);
    return
    
}

// loginmyuserid(user)

loginmyuserid({
    username: "salah",
    price: 999
})

const myarray = [12, 13, 14, 15]

function returnvalue(getarray){
    return getarray[1]
}

// console.log(returnvalue(myarray));
console.log(returnvalue([12, 13, 14 ,15]));
