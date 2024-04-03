#! /usr/bin/env node
import inquirer from "inquirer"

console.log("\n\twelcome to amnas_number_guessing_game\n");
let condition = true
while(condition){

let randomNumber = Math.floor(Math.random() * 5 + 1 );

const answer = await inquirer.prompt(
    [
        {
            name:"userguessednumber",
            type:"number",
            message:"guess a number between 1 to 5 :",
        }
    ]
)


if(answer.userguessednumber === randomNumber){
console.log("congratulation! you guessed a correct number.");
}

else if(answer.userguessednumber > 5){
    console.log("please enter valid number");
}

 else {
    console.log("sorry! you guessed a wrong number.");

}
condition = answer;
}
