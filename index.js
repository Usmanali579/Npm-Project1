#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import { Sum, Subtract, Multiply, Division } from "./operation.js";
const welcome = async () => {
    console.log(figlet.textSync('Calculator!'));
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number",
        },
        {
            type: "list",
            name: "operation",
            message: "Select your operation",
            choices: ['+', '-', '*', '/']
        },
    ]);
    if (input.operation == '+') {
        const result = Sum(input.num1, input.num2);
        console.log(result);
    }
    else if (input.operation == '-') {
        const result = Subtract(input.num1, input.num2);
        console.log(result);
    }
    else if (input.operation == '*') {
        const result = Multiply(input.num1, input.num2);
        console.log(result);
    }
    else if (input.operation == '/') {
        const result = Division(input.num1, input.num2);
        console.log(result);
    }
    else {
        console.log("Invalid operation");
    }
};
await welcome();
