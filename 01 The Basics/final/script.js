   
   
   /*
   // alert("hello world")

   let month = "feb"
   // if(month == "feb") alert("its feb month")


   // console.log('Raunak')

   // console.log(24)
  
   console.log(57+20+30+12)

   let employeeName = "Raunak Srivastava"

   let profession = "Coder"
   let salaryInRupees = 87000 

   let profession1 = "Coder"
   let profession2 = "Teacher"

   let previousProfession = "Coder"
   let currentProfession = "Teacher"

   let firstNamePerson ='Raunak'
   let first_name_person = ""
   let first_name = ""

   let firstName = "Raunak"
   let lastName = "Srivastava"

   console.log(employeeName)
   console.log(employeeName)
   console.log(profession)
   console.log(salaryInRupees)
  


   console.log(typeof true) 
   console.log(typeof false) 
   console.log(typeof 33.04) 
   console.log(typeof 23)
   console.log(typeof "Raunak")

   let firstName = "Raunak"
   console.log(typeof firstName)
   
   firstName = 24
   
   console.log(typeof firstName)

   let lastName

   console.log(lastName)
   console.log(typeof lastName)
   
   lastName = true
   
   console.log(typeof lastName)

   console.log(typeof null)



let age = 34

age = 46

const yearOfBirth = 1998

var girlsAge = 23
girlsAge = 46

firstName = 'Raunak'
firstName = "Rony"


console.log(girlsAge, firstName)
 */

/*
// Mathematical Operators


const currentYear = 2023
const ageRaunak = currentYear - 1998 // age in single value
const ageRam = currentYear - 2003

console.log(22 * 2) // multiplication
console.log(22 / 2) //division
console.log(22 + 2) //addition / concatination
console.log('hello'+ ' '+ 'world') //addition / concatination




console.log(ageRam , ageRaunak)


// Assignment Operators

let value = 34+2 // 36

value += 2  //  value = value + 2 // 36 +2 //38
value -= 2  //  value = value - 2 // 38 -2 //36
value *= 2  //  value = value * 2 // 36 * 2 // 72
value /= 2  //  value = value / 2  , 72 /2 // 36

value++ // value +1 // 37 
value++ // value +1 // 38 
value-- // value -1 // 37
value-- // value -1 // 36

console.log(value)



// Comparison Operators
console.log(ageRaunak > ageRam) // <  , > , >= ,<=
console.log(ageRaunak < ageRam) //
console.log(ageRaunak >= ageRam) // 25 > 20 or 25 = 20 then return true
console.log(ageRaunak <= ageRam) // 25 < 20 or 25 = 20 then return true
console.log(20 <= ageRam) // 20 < 20 or 20 = 20 then return true
*/
/*


// operator precedence 
const currentYear = 2023
const ageRaunak = currentYear - 1998 // age in single value
const ageRam = currentYear - 2003

console.log( 20+3 > 22 * 2) // 44 then 23 then 23 > 44

let avg =  (20 + 30) /2 //15 +20 //35

let x ,y;

x = y = 10 +20 -5 // 30 - 5 // 25

// y = 25
// x = y i.e 25
console.log( x ,y ) 

*/

/*
const firstName  = "Raunak", job  = "Teacher", age = 2023 - 1995

// syntax before es6 template literals
const detail = "I'm " + firstName + ", a " + age + " year's old " + job

const detailRaunak = `I'm ${firstName}, a ${age} year's old ${job}`



console.log(detail)
console.log(detailRaunak)

console.log('hello this \n\
is a multiline \n\
string')

console.log(`hello this is template literal
 multiline
string`)
*/

/*

const age = 20 
const isEligibleToMarry = age >= 18 // return boolean value true/false

if(isEligibleToMarry){
console.log("Riya is elegible to get married ")
}else{
   console.log(`Riya have to wait for ${18- age} years`)
}

// if(){

// }else{

// } //control if else structure 

let isRightAgeToMarry;
if(age >= 18){
   isRightAgeToMarry = true
}else{
   isRightAgeToMarry = false
}

console.log(isRightAgeToMarry)

*/
/*
// type conversion

let data = "123"

console.log(typeof data)
console.log(23 + data) //126 "23" + "123" = 23123

// let dataNum =  Number("abc") //+data //Number(data)
// let dataNum =  Number(data) //+data //Number(data)
// console.log(typeof dataNum, typeof data) 
// console.log(dataNum) 
// console.log( typeof dataNum) 
// console.log(typeof String(dataNum))


// type coercion

console.log(typeof ('3' + 3)) // '3' + '3' = '33'
console.log( typeof ('3' - 3)) // 3 - 3 = 0
console.log(typeof ('3' * '3')) // 3 * 3 = 9

console.log('i am a ' + 23 + ' year old boy') 


let guessNum = '3' + 6 // '3' + '6' = '36'

guessNum = guessNum * 2 - 2 // '36' * 2 == 36 * 2 - 2 // 72 -2

console.log(guessNum)

*/

/*
// 5 falsy values  :  0 , '' , null ,undefined ,NaN
 // returns false after conversion 
// false

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(24))
console.log(Boolean('test'))
console.log(Boolean({}))
console.log(Boolean([]))

// logical operators
// conditions like if else

let cash = 0; // 0 will be turned into false in if condition 

if(cash){ // js tries to convert it into boolean
   console.log("Yay! we have cash")
}else{
   console.log("Oh! no we got no cash")
}

let firstName = "" // undefined

if(firstName){
   console.log("Yay! we have first name value", firstName )
}else{
   console.log(" we  dont have first name value", firstName )
}


let cashInHand  = 0 // undefined

if(cashInHand){
   console.log("Yay! we have cashInHand value", cashInHand )
}else{
   console.log(" we  dont have cashInHand value, ie undefined", cashInHand )
}

*/
/*
// == // loose comparison operator // does type coercion
// = means assignment operator

const looseComparison = '19' == 19
console.log(looseComparison)

// === // strict comparison operator // doesnot perform type coercion

const strictComparison = 19 === 19
console.log(strictComparison)

let cash = 0
// let marksObtained = Number(prompt("How much marks you've got in maths?"))
let marksObtained = +prompt("How much marks you've got in maths?")
console.log(typeof marksObtained , marksObtained)

if(marksObtained === 20){
   cash = marksObtained + 10 //30 // '20' + 10 // '2010'
   console.log('your reward is ',cash)
}else if(marksObtained === 10){
 cash = marksObtained + 5 // 10 +5
   console.log('your reward is ',cash)
}else{
   console.log('your reward is ',cash)
}


// if(marksObtained === 20)  console.log('your reward is ',cash = marksObtained + 10)  


// != and !== // != does type coercion // !== doesnot perform type coercion

 if(marksObtained != 20)  console.log('your reward is ',cash = marksObtained)  
 // '10' != 20 // 10 != 20  // true

 if(marksObtained !== 20)  console.log('your reward is ',cash = marksObtained)  

// '20' !== 20 // 20 !== 20  // false

*/

// const havePassedTheTest = false
// const passedWithGoodMarks = false


// // and (&&)

// console.log(havePassedTheTest &&  passedWithGoodMarks) //only true 
// // when both the statements are true

// // or (||)
// console.log(havePassedTheTest ||  passedWithGoodMarks) // will return
// //  true  if atlease one is true


// console.log('not operator example ',!havePassedTheTest) //  to inverse the value 

// if(havePassedTheTest && passedWithGoodMarks){
//    console.log("Hi Ram Congratulations, You Got A gift!")
// }else{
//    console.log("Hi Ram you need to work hard")
// }

// const result = havePassedTheTest || passedWithGoodMarks

// if(result){
//    console.log("Hi Ram Congratulations, You Got A gift!")
// }else{
//    console.log("Hi Ram you need to work hard")
// }
/*
const havePassedTheTest = true
const passedWithGoodMarks = true

const hasCheated = true
const result = havePassedTheTest && passedWithGoodMarks && !hasCheated
               // true                 true                    false
if(result){
   console.log("Hi Ram Congratulations, You Got A gift!")
}else{
   console.log(`Hi Ram you need to work hard ,
    and don't cheat next time `)
}

*/

/*
const day = 'wednesday'

switch(day){

   case 'monday': // does the strict comparison day === 'monday'
      let sum = 3+4
      console.log("i go to swimming class",sum)
      break;
   case 'tuesday':
      console.log("i go to yoga class")
      break;

   case 'wednesday':
   case 'thursday':
      console.log("i go to office for coding")
      break;
   case 'friday':
      console.log("i go to party")
      break;
   case 'saturday':
      console.log("i do coding practice")
      break;
   case 'sunday':
      console.log("i enjoy my weekend")
      break;

   default:
      console.log("i do nothing")
      break;
}

if(day === 'monday'){
   let sum = 3+4
   console.log("i go to swimming class",sum)

}else if (day === "tuesday"){
   console.log("i go to yoga class")

}else if (day === "wednesday" || day === "thursday"){
   console.log("i go to office for coding")
}else if(day ==="friday"){
   console.log("i go to party")
}else if(day ==="saturday"){
   console.log("i do coding practice")
}else if(day === "sunday"){
   console.log("i enjoy my weekend")
}else{
   // default case here..
   console.log("i do nothing")
}

*/
/*

7+8 // produces value => 15
"Raunak"
5>10 || 3<2 // everything that produces value is an expression


let firstName = "Raunak"

if(true){
   //code..
}else{
   // more code..
}

console.log(`${"Raunak"} some text`)

*/

/*

// ?

// let age = 16

// age >= 18 ? console.log("i like going to gym") : console.log("i like doing home workout")
// the condition     if block code                 else block code 



// let preference = age >= 18 ? "going to gym" : "doing home workout" // expression
// produces value

// console.log(preference)

let age = 10
console.log(`i like ${age >= 18 ? "going to gym" : "doing home workout"}`)


let preference2;

// if(age >= 18){
//    preference2 = "going to gym"
// }else{
//    preference2 = "doing home workout"
// }

if(age >= 18){
   preference2 = "going to gym"
}else if(age>15){
   preference2 = "doing home workout"
}else{
   preference2 = "doing study"
}

let preference = age >= 18 ? "going to gym" : age>15 ? "doing home workout" : "doing study"



console.log("preference",preference)
console.log("preference2",preference2)

*/


//-----------------------------------------

'use strict'

/*

let age = 20

ace = 30

if(age>20){
   console.log('now you are elder than 20')
}

// let interface = "hi"
let private = "hello"

console.log(interface, private)
*/

/*
function log(){

   console.log("Hi this is just a random log")
}

// log()
// log()
// log()
// log() //calling / invoking / running

function studentInClassFinder(numberOfStudents,classSection){ // paramaters

// console.log(numberOfStudents , classSection )

const summary = `We have ${numberOfStudents} students in class ${classSection}`
return summary

console.log(numberOfStudents , classSection )

}


const classData4a = studentInClassFinder(3,'4A') // arguements
const classData5b = studentInClassFinder(20,'5B') // arguements
const classData3C = studentInClassFinder(12,'3c') // arguements
// used so we can follow DRY principal  i.e (DO NOT REPEAT YOURSELF)

console.log("classData4a-->", classData4a)
console.log("classData5b-->", classData5b)
console.log("classData3C-->", classData3C)

let stringVal  = String(34) // return string of 34

console.log(stringVal, typeof stringVal)

// console.log("classData4a by function Directly-->", studentInClassFinder(3,'4A'))

// const exampleVar = "hi"

// console.log(exampleVar)
*/

/*

// Function Declarations 

const fullName1 = lastNameJoin("Srivastava");
console.log(fullName1);

function lastNameJoin(lastName) {
  return `Raunak ${lastName}`;
}

// const fullName1 = lastNameJoin("Srivastava");

// console.log(fullName1);

// Function Expressions

const fullName2 = lastNameJoin1("Taneja");
console.log(fullName2);

const lastNameJoin1 = function (lastName) {
  return `Raunak ${lastName}`;
};

*/

/*

// Arrow Function

// const lastNameJoin2 = () => `Raunak `; // without parameter
// const lastNameJoin2 = lastName => `Raunak ${lastName}`; // with single parameter
// const lastNameJoin2 = (firstname,lastName) => `My name is ${firstname} ${lastName}`; // with single parameter
const lastNameJoin2 = (firstname, lastName) => {
  const fullName = `My name is ${firstname} ${lastName}`;
  const job = ` I'm A Coder`;

  return fullName + job;
};

// arrow functions doens't have their own this keyword 




const fullName3 = lastNameJoin2("Raunak","Kukreja");
console.log(fullName3);

*/

/*

function ageCalculator(birthYear){
  return 2024  - birthYear 
}


function personAgeFinder(personName, birthYear){

 const personAge =  ageCalculator(birthYear)

  const ageDetails = `${personName} was born in ${birthYear} and his age is ${personAge}`

  return ageDetails
  
  
}
console.log("hi there ")

console.log(personAgeFinder("Raunak", 1996))

*/

/*

const name1 = "Gaurav"
const name2 = "Rajiv"
const name3 = "Mike"
const name4 = "Joan"
const name5 = "Raj"

// [] array literal syntax
// new Array()

// const friends = ['Gaurav','Rajiv','Mike','Joan','Raj'] 
const friends = ['Gaurav','Rajiv','Mike','Joan',name5] 
const friends3 = ['Gaurav',friends,2024-1995,'Joan',true, 10>13] 
const friends2 = new Array('Gaurav',friends,2024-1995,'Joan',true, 10>13)
// indexes of array expects expressions

// array is zero based because it calculates the distance of an element
// from initial index
// eg 'Gaurav'  is first elemten   it is 0 distance away from initial/first element
// 'Rajiv'  is 1 element away from the initial/first element so it holds index 1 and so on...


console.log(friends)
console.log(friends.length) // total count of the elements
console.log(friends[friends.length-1]) // last element

// [] bracket notation to access the array elements
console.log(friends[0])
console.log(friends[5-6]) // 5-6 // -1
console.log(friends[11-6] ,11-6) // 11-6 // 5
console.log(friends[1]) // 11-6 // 5
console.log(friends[friends.length-1]) // 5-1 // 4 // friends[4]
console.log(friends2)
console.log('friends -->', friends3)

friends[0] = 'Raunak'
// friends = ['Raunak', true , 34]
// friends = true
// primitive values 
console.log(friends)

// exercise

function ageCalculator(birthYear){
  return 2024  - birthYear 
}

let birthYearArr = [1998, 2001,1996, 1990, 1989]

const age1 = ageCalculator(birthYearArr[0])
const age2 = ageCalculator(birthYearArr[1])
const ageLast = ageCalculator(birthYearArr[birthYearArr.length -1])

const agesArr = [ageCalculator(birthYearArr[0]),ageCalculator(birthYearArr[1]),
ageCalculator(birthYearArr[birthYearArr.length -1])
]
console.log(age1 , age2, ageLast, agesArr)

*/


/*
const friends = ['Gaurav','Rajiv','Mike','Joan','Raj']

// adding elements in array 

// adding at the end
// let latestLength = friends.push("Pulkit")

// adding at the start
//  let res = friends.unshift("First")
//  let res = friends.unshift([])

// push , unshift return the latest updated length of the array
// console.log(friends,res)

// adding elements in array 

// removing at the end
// friends.pop()
//  let lastElement = friends.pop()

// console.log(friends, lastElement)

// removing at the end
//  let lastElement = friends.shift()

// console.log(friends, lastElement)

// pop ,  shift  returns the removed element from the array

// to check the index
// console.log( friends.indexOf("Rajiv"), friends)

// to check if the element is present in array or not 
console.log( friends.includes("Prateek")) // returns boolean value
// it performs the strict comparison
friends.push('23')

console.log(friends)

console.log( friends.includes('23')) 

*/

/*
const raunakData = [

  'Raunak',
  'Srivastava',
  'Coder',
  2030 - 1997,
   ['Raj', 'Roy', 'Sam']

]

//Object Literal Syntax {}
// order doesn't matter
// store data in key value pairs
// access data by their properties
const raunakData2 = {
  firstName: "Raunak",
  lastName: "Srivastava",
  job: "Coder",
  age: 2030 - 1997,
  friends: ["Raj", "Roy", "Sam"],
};


console.log(raunakData2)


// const queryKey = prompt('What you want to know about Raunak? choose from the following: firstName,lastName,job,age, friends')

// using Dot(.) notation

console.log(raunakData2.firstName)
// console.log(raunakData2.birthYear)
console.log(raunakData2.queryKey)


// raunakData2.firstName = "Raghav"
console.log(raunakData2.firstName)

raunakData2.birthYear = 1997 // ADDING A NEW PROPERTY

console.log(raunakData2)

// using Bracket[] notation

console.log(raunakData2['lastName']) // can pass computed value in brackets

const nameKey = 'Name'
// console.log(raunakData2['birthYear'])

// raunakData2["firstName"] = "Yash"
// raunakData2['first'+nameKey] = "Yash"
console.log(raunakData2['first'+nameKey]) // 'first'+ 'Name' => firstName
// console.log(queryKey)

// console.log(raunakData2[queryKey]) // replaced with value 

raunakData2['jobType'] = 'WFO' // ADDING A NEW PROPERTY
console.log(raunakData2) 


// CHALLENGE 
// Raunak is born in 1997 and his age is 33 and he has total 3 friends so far. His best
// friend is Roy

const tempString = `${raunakData2.firstName} is born in ${raunakData2.birthYear} 
and his age is ${raunakData2.age} and he has total ${raunakData2.friends.length} friends
so far. His best friend is ${raunakData2.friends[1]}
`
console.log(tempString)

raunakData2.hobbies = {
  firstHobby:"Boxing",
  secondHobby:"Reading Books",
}

console.log(raunakData2)
console.log(raunakData2.hobbies.firstHobby)
console.log(raunakData2.hobbies['secondHobby'])
console.log(raunakData2['hobbies']['firstHobby'])

*/

/*

const raunakData2 = {
  firstName: "Raunak",
  lastName: "Srivastava",
  job: "Coder",
  birthYear: 1996,
  friends: ["Raj", "Roy", "Sam"],

  // calculateAge: function (birthYear){ // a function inside inside of an object
  //                                     // is called a method
  //   return 2024 - birthYear
  // }

  // calculateAge: function (){

  //   console.log(this) // this will point to parent of function (i.e where the function is getting called)
  //   return 2024 - this.birthYear // this ==raunakData2  // raunakData2.birthYear
  // }

  calculateAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

raunakData2.calculateAge3 = function (birthYear) {

  return 2024 - birthYear;
},


console.log(raunakData2.calculateAge())
// console.log(raunakData2)
// console.log(raunakData2.age)
// console.log(raunakData2.age)
// console.log(raunakData2.age)
// console.log(raunakData2.age)

//  
const raunakData = [

  'Raunak',
  'Srivastava',
  'Coder',
  2030 - 1997,
   ['Raj', 'Roy', 'Sam']

]
console.log(typeof raunakData)
console.log(raunakData['pop']())
console.log(raunakData2)

*/

/*

// console.log('attempted coding challenge 1')
// console.log('attempted coding challenge 2')
// console.log('attempted coding challenge 3')
// console.log('attempted coding challenge 4')
// console.log('attempted coding challenge 5')
// console.log('attempted coding challenge 6')
// console.log('attempted coding challenge 7')
// console.log('attempted coding challenge 8')
// console.log('attempted coding challenge 9')
// console.log('attempted coding challenge 10')


// 1.initial counter variable 
// 2. condition which evaluates before executing the code inside the loop
// increment/decrement the counter variable
for(let count = 0; count <= 5 ; count++){

// console.log(count , count <= 10  )

console.log(`attempted coding challenge ${count}`)
}
*/

/*
// const numArray = [1,2,3,4,5,6,7,8,9,10,15,25, 30] 

// const numArrDouble = []

// console.log(numArray[9] , numArray.length)
// for(let i=0; i < numArray.length; i++ ){
//   // console.log(numArray[i])

//   // filling an array
//   // numArrDouble[i] = numArray[i] * 2
//   // // numArrDouble at index 1  stores numArray at index 1 multiplied by 2
//   // //  i.e 2*2 // 4

//   numArrDouble.push(numArray[i] * 2)

// }

// console.log(numArrDouble  )

// const birthYears = [1998,2001,2008,1993,1995]
// const ages = []
// for(let i=0; i<birthYears.length; i++){

//   ages.push(2024 - birthYears[i])

// }

// console.log(ages)


const numArray = [1,2,3,4,5,6,7,8,9,10,15,25, 30] 

const oddNumsArr = []
for(let i=0; i < numArray.length; i++ ){
// continue example
// if(numArray[i] %2 ==0) continue
 // it will terminate /skip the current iteration and jump to next iteration

 // console.log(numArray[i])

 // break example
// if(numArray[i] %2 ==0) break
if(numArray[i] >5) break
// immediately stops the iteration when condition matches and exits the for loop

oddNumsArr.push(numArray[i])

}

// continue exits/skips the current iteration
//break exits immediately and stops the loop

console.log(oddNumsArr , numArray)

*/

/*
// const raunakData = [

//   'Raunak',
//   'Srivastava',
//   'Coder',
//   2030 - 1997,
//    ['Raj', 'Roy', 'Sam']

// ]
// for(let i=0; i < numArray.length; i++ ){
//   // continue example
//   // if(numArray[i] %2 ==0) continue
//    // it will terminate /skip the current iteration and jump to next iteration
  
//    // console.log(numArray[i])
  
//    // break example
//   // if(numArray[i] %2 ==0) break
//   if(numArray[i] >5) break
//   // immediately stops the iteration when condition matches and exits the for loop
  
//   oddNumsArr.push(numArray[i])
  
//   }

// for(const el of raunakData){
//   console.log(el)
// }

// for(const el in raunakData){
//   console.log(el) // log index of every element
// }


// const raunakData2 = {
//   firstName: "Raunak",
//   lastName: "Srivastava",
//   job: "Coder",
//   birthYear: 1996,
//   friends: ["Raj", "Roy", "Sam"],
// }

// for(const el in raunakData2){
//   console.log(el , ": ",raunakData2[el]) // log index of every element

//   // raunakData2[firstName]

// }



// looping backwards
const raunakData = [

  'Raunak',
  'Srivastava',
  'Coder',
  2030 - 1997,
   ['Raj', 'Roy', 'Sam']

]

// 0,1,2,3,4
// 4,3,2,1,0..

for(let i = raunakData.length-1; i>=0; i-- ){
  console.log(raunakData[i])
}

// nested looping 

// you have 5 challenges to attempt and 3 sub challenges in every challenge

// console.log('attempted coding challenge 1')
for (let count = 1; count <= 5; count++) {

  console.log('---- Challenge ----')
  console.log(`attempted coding challenge ${count}`);

  // attempt all 3 sub challenge in challenge

  for (let subCount = 1; subCount <= 3; subCount++) {

    console.log(`attempted sub coding challenge ${subCount}`);
  }
}


// parent loop is running 5 times 
// child loop (inside of parent ) is running 3 times in every 
// iteration in the parent loop 
*/


/*
for (let subCount = 1; subCount <= 3; subCount++) {

  // console.log(`attempted sub coding challenge ${subCount}`);
}

// let subCount = 0

//  while (subCount<5){
//   // run the code..

//   console.log(`WHILE :attempted sub coding challenge ${subCount}`);

//   subCount++
//  }


let randomNumGenerator = Math.trunc(Math.random() * 6) +1 // 1-6


// when you have no idea how many iterations a loop should run : use while loop
 while (randomNumGenerator !=6){
  // run the code..

  console.log(`before getting a 6 :you logged a random number that is : ${randomNumGenerator}`);
  
  randomNumGenerator = Math.trunc(Math.random() * 6) +1
  
  if(randomNumGenerator== 6){

    console.log(`before after a 6 :your loop is ending now : ${randomNumGenerator}`);
  }
 }

 */
