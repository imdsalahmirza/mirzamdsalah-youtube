const heroes = ["thor", "harrypotter", "spiderman"]
const anime_heroes = ["sasuke" , "naruto" , "tanjiro"]
const otherhero = ["hitachi", "madara"]

// heroes.push(anime_heroes)    // push (push on existing array)
// console.log(heroes);
// console.log(heroes[3][1])

// const allheroes = heroes.concat(anime_heroes)  // concat combines 2 or more array and return new array.
// console.log(allheroes);

const all_new_heroes = [...heroes, ...anime_heroes, ... otherhero]  // spread
// console.log(all_new_heroes)

const otherarray = [1, 2, 3, [4, 5, 6], 7 ,[6, 7, [4,5]]];

const real_other_array = [otherarray.flat(Infinity)];
console.log(real_other_array);



console.log(Array.isArray("salah")) // question/A = False

console.log(Array.from("salah"))      // convert in array either is is string numbers objects any.

console.log(Array.from({name: "salah"})) // (interesting) empty if does not make any array. 
// need to tell make array with keys or value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  // return a new array from set of elements.
