#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue(` _____________________
|  _________________  |
| | JO   0.123456   | |      
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`));
async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which type of calculation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the First number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the Second number",
        }
    ]);
    if (answer.operator == "Addition") {
        console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
    }
    else if (answer.operator == "Subtraction") {
        console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
    }
    else if (answer.operator == "Multiplication") {
        console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
    }
    else if (answer.operator == "Division") {
        console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
    }
}
async function StartAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue? Press Y or N"
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes");
}
StartAgain();
