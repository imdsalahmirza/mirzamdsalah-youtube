//console.log (2 > 1);
//console.log (2 >= 1);
//console.log (2 < 1);
//console.log (2 == 1);
//console.log (2 != 1);

console.log ("2" > 1);
console.log ("02" > 1) ;

console.log (null > 0);
console.log (null == 0);
console.log (null >= 0);

//the reason is that an equality check == and comparision >, <, >=, <= work differently
// camparision convert null to a number 0.
// thats why 3rd null >= 0 is true , and 1st null > 0 is false.

console.log (undefined == 0);
console.log (undefined > 0);
console.log (undefined < 0);

//AVOID THESE TYPES OF CONVERSION IN DIFFERENT DATA TYPES
// BECAUSE IT CAN BE CONFUSED ALLOT OF TIMES. CLEAN CODE.


//*************************summary*********************

//===
//strict check

console.log ("2" === 2);
