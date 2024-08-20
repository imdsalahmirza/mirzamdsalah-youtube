const score = 400
console.log(score)

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2))


const othernumber = 123.77899
console.log(othernumber.toString())
console.log(othernumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))



// ++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++........
 console.log(Math)
 console.log(Math.abs(-4))
 console.log(Math.round(4.6))
 console.log(Math.ceil(4.2))
 console.log(Math.floor(4.9))
 console.log(Math.sqrt(25))
 console.log(Math.min(4, 3, 6))
 console.log(Math.max(4, 5, 8))


 console.log(Math.random()) // in  random between 0 to 1 value 
 console.log((Math.random()*10 )+ 1) //avoid 
 console.log(Math.floor(Math.random()*10 )+ 1) //avoid 0


 const min = 10
 const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 