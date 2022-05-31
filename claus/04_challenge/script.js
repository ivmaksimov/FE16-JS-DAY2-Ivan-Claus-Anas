/*We discussed previously a couple of examples (Algorithms & Data Structures)

Go back to the material and try to program in JavaScript: 

- ATM machine (if you had more time. try to create a nice layout)*/

function atm (cash) {
    let hundred = Math.floor(cash/100);
    let rest = cash % 100;
    let fifty = Math.floor(rest/50);
    rest = rest % 50;
    let twenty = Math.floor(rest/20);
    rest = rest % 20;
    let ten = Math.floor(rest/10);
    rest = rest % 10;
    console.log("Your withdrawl will be split in " + hundred + " 100-dollar-bill(s), " + fifty + " 50-dollar-bill(s), " + twenty + " 20-dollar-bill(s) and " + ten + " 10-dollar-bill(s). For the rest amount of " + rest + " dollar(s), there are no fitting bank notes. Have a great day!")
}

atm(2897);