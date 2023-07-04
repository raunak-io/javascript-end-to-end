// we will be using use strict in all future lectures
"use strict";
/*
//TODO:

console.log('');

let func = nameVal => console.log(nameVal);


func('hello')
console.log();

console.log(43);

*/

/*
/*
--------------------------------
Problem Statement: given an unordered array of integers
return a new sorted array containing the squared 
values of the array we pass as an input 

eg: 
input array: [2,4,3,9,7]
output array: [4,9,16,49,81]
-------------------------------

// understanding a problem
// what if an emty array is passed ?
// in case any invalid value is there in array ?

// Breaking into sub problems

// create a function to accept an input array

//if the array is empty then return empty array

// create a new array to fill it with squared values 

// handle invalid values coming in the input arr

// sort the newly filled array 

// return newly filled array

function sortedSquaredArr(input){
//if the array is empty then return empty array

if(!input.length) return [] // return input 

// create a new array to fill it with squared values 
const squaredArr = []
for(let key of input){
 // handle invalid values coming in the input arr
if(typeof key != 'number') continue

// square the values 
// const squaredNum = key ** 2
squaredArr.push(key ** 2) // or use squaredNum in place of key ** 2

}
// sort the newly filled array 

squaredArr.sort((a,b)=>a-b)
// return newly filled array
console.log(squaredArr)
return squaredArr
}

sortedSquaredArr([2,4,3,9,7])
*/

// function degreeToKelvin() {
//   // find bug
//   const celsius = Number(prompt('Please enter Celsius value here: '));
//   //   const celsius = +prompt('Please enter Celsius value here: ');

//   // fix it
//   console.log('celsius -->', celsius, typeof celsius);
//   //   console.warn('celsius -->', celsius, typeof celsius);
//   //   console.error('celsius -->', celsius, typeof celsius);

//   //   console.log(console, []);
//   const kelvin = celsius + 273.15;

//   console.log('kelvin -->', kelvin);

//   return kelvin;
// }

// // IDENTIFY
// console.log(degreeToKelvin());

function sortedSquaredArr(input) {
  // debugger;
  if (!input.length) return [];

  const squaredArr = [];
  for (let key of input) {
    if (typeof key != "number") continue;

    squaredArr.push(key ** 2);
  }

  squaredArr.sort((a, b) => a - b);

  return squaredArr;
}

console.log(sortedSquaredArr([2, 4, 3, 9, 7]));
