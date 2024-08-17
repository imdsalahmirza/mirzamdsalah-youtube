const name = "salah"
const repocount = 3

//console.log(name + repocount +" value") 
// this is not good 

console.log(`hello my name is ${name} & my repo count is ${repocount} `);

// modern way of syntax and it is call string interpollation 

const gamename = new String("salah-hc-com")

console.log( gamename[0])
console.log( gamename.__proto__)
console.log( gamename)
console.log( gamename.length)
console.log( gamename.padEnd())
console.log( gamename.toUpperCase())
console.log( gamename.charAt(2))
console.log( gamename.indexOf('s'))
console.log( gamename.bold ())
console.log( gamename.blink () )
console.log( gamename.charCodeAt ())
console.log( gamename.substring (0, 4))
console.log( gamename.toLowerCase ())

const newString = gamename.substring(0, 4)
console.log(newString);

const onotherstring = gamename.slice(-7, 7)
console.log(onotherstring)


const newstring1 = "   salah    "
console.log(newstring1)
console.log(newstring1.trim())

const url = "https://salah.com/salah20%mirza"
console.log(url.replace ('20%' , '_'))

console.log(url.includes('salah'))

console.log( gamename.split ('-'))

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)
console.log(array3)

console.log( gamename.anchor ('top'))

const paragraph = 'hello my name is salah'
const regex = /(A-Z)/d;
const found = paragraph.match(regex);

console.log(found)

