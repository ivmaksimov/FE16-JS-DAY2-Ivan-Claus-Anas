/*Time Convert
Create a JavaScript function that will return the number of minutes, in hours and minutes. The function should accept only one argument.

E.g. If we call the function and pass the number of minutes 200 we should get the message "200 minutes = 3 hour(s) and 20 minute(s)."*/

function showTime (minutes) {
    let hours = minutes / 60;
    hours = Math.floor(hours);
    let rest = minutes - (hours * 60);
    console.log(minutes + " minutes = " + hours + " hour(s) and " + rest + " minute(s).")
}

showTime(345);