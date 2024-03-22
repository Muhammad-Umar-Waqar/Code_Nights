import inquirer from 'inquirer';
const random_number = Math.floor(Math.random() * 11);
while (true) {
    const answer = await inquirer.prompt([{
            name: "userGuessedNumber",
            type: "number",
            message: "please enter a number"
        }]);
    if (answer.userGuessedNumber == random_number) {
        console.log("you enter a right number");
        console.log(`Computer generated Number is also ${random_number}`);
        break;
    }
    if (answer.userGuessedNumber > random_number) {
        console.log("your number is greater than random number ");
        console.log("Please Try Again");
    }
    if (answer.userGuessedNumber < random_number) {
        console.log("your number is smaller than random number");
        console.log("Please Try Again");
    }
}
