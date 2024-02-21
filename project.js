// function deposit() {
//     
// }

const prompt = require("prompt-sync")();

const deposit = () => {
    const depAmount = prompt("How much would you like to deposit: $");
    const depNum = parseFloat(depAmount);

    if (depNum <= 0 || isNaN(depNum)) {
        console.log("Not a valid deposit amount, please enter an amount greater than $0");
        deposit();
    } else {
        return depNum;
    }

}

const getLines = () => {
    const linesAmount = prompt("Enter the number of lines to bet on (between 1-3): ");
    const linesNum = parseFloat(linesAmount);

    if (linesNum > 3 || linesNum < 1 || isNaN(linesNum)) {
        console.log("Not a valid entry for lines, please try again.");
        getLines();
    } else {
        return linesNum;
    }
}

let balance = deposit(); //amount the user is depositing to bet with, not const since it needs to be mutable to deduct bet amounts
const lines = getLines();