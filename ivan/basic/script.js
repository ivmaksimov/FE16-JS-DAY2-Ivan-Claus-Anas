// // ex 1 | Crystal Gazer
// Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title. Once the user passes the four arguments the program should output the following message on screen:

// You will be a job_title in location and married to partners_name with number_childrens.

function crystalGazer(numChildrens, partnerName, jobTitel, location,) {

  return ("You will be a " + jobTitel + " in " + location + " and married to " + partnerName + " with " + numChildrens + "childrens.")
}

console.log(crystalGazer("ten", "Michaela" , "scientist", "Zimbabwe"));



// ex 2 | Age Calculator
// Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

// You should get the following results:

// You are either 29 or 28

  
  
  function ageCalculator(birthYear, currentYear) {
    
    let age = currentYear - birthYear;
    let orAge = age - 1;
    
    return  "You are either " + age + " or " + orAge + " years old." ;
    
  }

  console.log(ageCalculator(1993, 2022));


// ex 3 | Age Calculator-improved
// Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just by  passing one argument.

// You should get the following results:

// You are either 29 or 28

function ageCalculator2(birthYear, currentYear = new Date().getFullYear()) {
  let age = currentYear - birthYear;
    let orAge = age - 1;
    
    return  "You are either " + orAge + " or " + age + " years old." ;
}

console.log(ageCalculator2(1993));


// ex 4 | Degree-Radian Conversion
// Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

// E.g. If user passes 90 degrees it should get the result of 1.57079 radians


function degreeToRadian(degrees) {

    radians = degrees * (Math.PI/180);
    return radians;

}


console.log(degreeToRadian(90));


// ex 5 | Area and Volume of a box
// Create a function that calculates the area and volume of a box.

// Formulas:

// area = width x height

// volume = width x height x depth

// Pass three different numbers as arguments and get calculated results using the return statement.

// You should get the following results:

// The area of the box is: 14

// The volume of the box is: 70
let message1 ="The area of the box is: "

let message2 ="The volume of the box is: "

function box(width, height, depth) {
  area = width * height;
  volume = width * height * depth;
  
  
  result = [area, volume];
  return result;
}

console.log(message1 + box(2, 7, 5)[0]);

console.log(message2 + box(2, 7, 5)[1]);

// Monday May 30 


