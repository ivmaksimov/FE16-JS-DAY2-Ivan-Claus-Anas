


// We discussed previously a couple of examples (Algorithms & Data Structures)

// Go back to the material and try to program in JavaScript: 

// - ATM machine (if you had more time. try to create a nice layout)


let banknotes = [[500,10], [100,20], [50 ,30] , [20,40], [10,50], [5, 60] ];



function atm(request) {

  let banknoteOfFivehundred = Math.floor(request / 500);

  let rest = request % 500;

  let banknoteOfHundred = Math.floor(rest / 100);

  rest = rest % 100;

  let banknoteOfFifty = Math.floor(rest / 50);

  rest = rest % 50;

  let banknoteOfTwenty = Math.floor(rest /20);

  rest = rest % 20;

  let banknoteOfTen = Math.floor(rest / 10);

  rest =  rest % 10;

  let banknoteOfFive = Math.floor(rest / 5);



  return `You will receive ${banknoteOfFivehundred} banknote(s) of 500€, ${banknoteOfHundred} banknote(s) of 100€, ${banknoteOfFifty} banknote(s) of 50€, ${banknoteOfTwenty} banknote(s) of 20€, ${banknoteOfTen} banknote(s) of 10€ and ${banknoteOfFive} banknote(s) of 5€.`
};

console.log(atm(885));



