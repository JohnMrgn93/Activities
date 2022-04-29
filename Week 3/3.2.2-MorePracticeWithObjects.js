const key = "1";

const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// what will the following lines print?
 // console.log(obj[key]);
 // console.log(obj["key"]);
 // console.log(obj["1"]);


/*
Create an object with at least four properties, each with a different data type
Name one of the four properties "collection" and set its value to an Array or Object
*/

const something = {
  collection: {
    love: "Self",
    hate: 0,
    primes: [1, 3, 5],
    truth: true
  },
  veggies: "broccoli, spinach, squash",
  meat: false,
  snacks: 3
};

// access a value in in "collection" property
// console.log("my favorite prime is", something.collection.primes[1]);


// Nested Arrays and Objects
//---------------------------
const arrKeys = ["key", "1", "method", "favorites", "list"];

const newObj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// add a method to newObj
newObj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// add a favorites key and values to newObj
// fill in your favorite movie, number and color below
newObj["favorites"] = {
  movie: "The Shining",
  number: 19,
  color: "gray"
};

// add an array to newObj
newObj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];


/*
How many lines will the following for...of statement print?
What do you expect to see on each line?
*/

for (let element of arrKeys) {
console.log(`The key is: ${element}, and value is: ${newObj[element]}`);
// }

// use a template literal to print a sentence about your favorite movie and color
console.log(`My favorite movie is ${newObj.favorites.movie}, and my favorite color is ${newObj.favorites.color}.`);

accessed ( "b", 4, and 6 + obj.list)

console.log("List [1] = ", newObj.list[1]);

console.log("List [4][1] =", newObj.list[4][1]);

console.log("List [5].f = ", newObj.list[newObj.list.length - 1].f);
