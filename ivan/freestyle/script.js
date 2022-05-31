

function greeting() {
      console.log("Hi there, today is a good day to learn JS" );
}
greeting();


let n1 = 100;
let n2 = 885;
let n3 = n2 % n1;
console.log(n3);

let n4 = Math.floor(n2 / n1)
console.log(n4)

var area = (function() {  
 var width = 3 ;
 var height = 2;
 return  width * height;
}());
//ES5 function declaration
function multiply(param1, param2 ) {
  return param1 * param2;
}

//ES5 function expression
const greet = function (param) {
  return  "Hallo, " + param;
}
console.log(greet("who"));

//ES6 arrow function
const luckyNumber = one => console.log(one);
luckyNumber(7);

const noParams = () => 4*20; //no parameters
console.log(noParams()); // 80

const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(7, 9));

const greetings = (greeTime, who) => `Good ${greeTime} ${who}.`;
console.log(greetings("morning", "John"));

const greetingt = (greeTime, who)=> `Good ${greeTime} ${who}.`;
console.log(greetings("morning", "John"))//`Good morning John.`;

// (() => { console.log('This is a self executing function'); })();

//This is a self executing function
let self = (() => {
  return  ('The var self now holds the message.');
})();
console.log(self);
//The var self now holds the message.

let trt = Math.sqrt(16);
console.log(trt)



Math.PI

//Returns pi (approximately 3.14159265359)

Math.round()

//Rounds number to the nearest integer

Math.sqrt(9)

//Returns square root of positive number, e.g. Math.sqrt(9) returns 3

Math.ceil()

///////Rounds number up to the nearest integer

Math.floor()

//Returns number down to the nearest integer

Math.random()

//Generates a random number between 0 (inclusive) and 1 (not inclusive)

var randomNum = Math.floor(Math .random() * 11);
console.log(randomNum);

// as we know Math.random will give a random value between 0 and 1. If we want the result to be between 0 and 9 we multiply the result by 10. If we want the result between 0 and 50, we multiply the result by 51. Always add 1 to the desired last number for the range.

//getDate()

//setDate()

//Returns / sets the day of the month (1-31)

getDay()


//Returns the day of the week (0-6)

getFullYear()

setFullYear()

//Returns / sets the year (4 digits)

getHours()

setHours()

//Returns / sets the hour (0-23)

getMilliseconds()

setMilliseconds()

//Returns / sets the milliseconds (0-999)

getMinutes()

setMinutes()

//Returns / sets the minutes (0-59)

getMonth()

setMonth()

//Returns / sets the month (0-11)

getSeconds()

setSeconds()

//Returns / sets the seconds (0-59)

getTime()

setTime()

//Number of milliseconds since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time) and a negative number for any time before

getTimezoneOffset()

//Returns time zone offset in mins for locale

toDateString()

//Returns “date” as a human-readable string

toTimeString()

//Returns “time” as a human-readable string

toString()

//Returns a string representing the specified date
