/*ex 1 | Crystal Gazer
Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title. Once the user passes the four arguments the program should output the following message on screen:

You will be a job_title in location and married to partners_name with number_childrens.*/

function crystalGazer(numChildren, namePartner, location, job) {
    console.log("You will be a " + job + " in " + location + " and married to " + namePartner + " with " + numChildren + " kids.");
};

crystalGazer(5, "Jolene", "Iraq", "doctor");

/*ex 2 | Age Calculator
Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

You should get the following results:

You are either 29 or 28*/

function ageCalculator(birthYear, currentYear) {
    var age1 = currentYear - birthYear;
    var age2 = currentYear - birthYear - 1;

    console.log("You are either " + age1 + " or " + age2 + ".");
}

ageCalculator(1989, 2022);

/*ex 3 | Age Calculator-improved
Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just by  passing one argument.

You should get the following results:

You are either 29 or 28*/

function ageCalculator(birthYear) {
    var today = new Date();
    var age1 = today.getFullYear() - birthYear;
    var age2 = today.getFullYear() - birthYear - 1;
    console.log("You are either " + age1 + " or " + age2 + ".");
}

ageCalculator(1989);

/*ex 4 | Degree-Radian Conversion
Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

E.g. If user passes 90 degrees it should get the result of 1.57079 radians*/

function degreeRadian(degrees) {
    console.log(degrees * (Math.PI / 180))
}

degreeRadian(360);

/*ex 5 | Area and Volume of a box
Create a function that calculates the area and volume of a box.

Formulas:

area = width x height

volume = width x height x depth

Pass three different numbers as arguments and get calculated results using the return statement.

You should get the following results:

The area of the box is: 14

The volume of the box is: 70*/

function areaVol(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    console.log("The area of the box is: " + area);
    console.log("The volume of the box is: " + volume);
}

areaVol(2, 7, 5);