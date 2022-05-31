/*Capitalize
Write an anonymous JavaScript function to capitalize only the first letter of a string. The function accepts only one string argument.

E.g. If we pass the following string 'i am a web developer' we should get the message 'I am a web developer'

Hint: Check JavaScript String charAt() Method*/

// var string = ("hello world.")

(function () {
    let string = ("hello world.")
    let firstLetter =  string[0].toUpperCase();
    console.log(firstLetter + string.slice(1));
   }());

//    ((str = "i am a web developer") => { console.log(str.charAt(0).toUpperCase() + str.substring(1)) })(); = BETTER VERSION

/*Average Grade
Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

E.g. If you put the following grades 3, 4, 5 the result should be:

Sum:12

Average: 4*/

function grades(math, physics, english) {
    let sum = math + physics + english;
    let average = sum / 3;
    console.log("Sum: " + sum)
    console.log("Average: " + average)
}

grades(1,2,3);