


// Time Convert
// Create a JavaScript function that will return the number of minutes, in hours and minutes. The function should accept only one argument.

// E.g. If we call the function and pass the number of minutes 200 we should get the message "200 minutes = 3 hour(s) and 20 minute(s)."


function timeConvert(minutes) {
  hours = Math.floor(minutes / 60);
  restOfMinutes = minutes % 60;
  return (minutes + " minutes" + " = " + hours + " hour(s) and " + restOfMinutes + " minutes.");
}

console.log(timeConvert(200));


