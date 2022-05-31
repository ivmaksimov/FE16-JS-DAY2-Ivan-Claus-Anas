


// Capitalize
// Write an anonymous JavaScript function to capitalize only the first letter of a string. The function accepts only one string argument.

// E.g. If we pass the following string 'i am a web developer' we should get the message 'I am a web developer'

// Hint: Check JavaScript String charAt() Method
let text = "i am a web developer";

((string = text) => {
  console.log(string.charAt(0).toUpperCase() + string.slice(1));
})();


let capitalise = (function() {  

  return (text.charAt(0).toUpperCase() + text.slice(1));
}());

console.log (capitalise);

// Average Grade
// Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

// E.g. If you put the following grades 3, 4, 5 the result should be:

// Sum:12

// Average: 4

function avGrade(math, physics, english) {
  sum = math + physics + english;
  average = sum / 3;
  return (`Sum: ${sum} \n Average: ${average}`)
}

console.log(avGrade(3, 4, 5));

