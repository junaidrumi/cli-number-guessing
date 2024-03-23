#! /usr/bin/env node

import inquirer from "inquirer";
// 1_ commputer will genrate random number: done

// 2_ user input for guessing number: done

// 3_ compare user input with computer genrated number and show result: done

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcom to number guessing game");

const answer = await inquirer.prompt([
{
name: "userGuessNuber",
type: "number",
message: "please guess a number between 1-6:  ",
}
]);

if(answer.userGuessNuber === randomNumber){
    console.log("Congratulation! you guessed right number");
}else{
    console.log("Sorry! you guessed wrong number");
}