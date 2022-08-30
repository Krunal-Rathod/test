/**
1. Values and Variable

let country = "India";
let continent = "Asia"
let population = "138 crore"
console.log(country);
console.log(continent);
console.log(population); */

//2. Data Type
/*let year = true;
console.log(typeof year);*/

//3. Var, Let, Const
/*let age = 30;
age = 31;
console.log(age)

const birthYear = 1990
birthYear = 2000;*/

// 4. Operators
// const currentYear = 2022;
// const ageJohn = currentYear - 1990;
// const ageSame = currentYear - 1980;
// console.log(ageJohn, ageSame);

// const firstName = "Krunal";
// const lastName = "Rathod"
// console.log(firstName + " " + lastName);

// console.log(ageJohn > ageSame);

// Coding Challenge #1
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const markBMI = markMass /  markHeight ** 2;
// const johnBMI = johnMass /  johnHeight ** 2;
// console.log("Mark's BMI: " +markBMI+ " ", "John's BMI: " +johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// Coding Challenge #2
// if(markBMI > johnBMI) {
//     console.log(`Marks' BMI(${markBMI}) is higher than Jonh's(${johnBMI})`)
// } else {
//     console.log(`Marks' BMI(${markBMI}) is lower than Jonh's`)
// }

// 4. Logical Operator
// const hasDrivingLiecnce = true;
// const hasGoodVision = true;
// console.log(hasDrivingLiecnce && hasGoodVision);

// if (hasDrivingLiecnce && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone alse should driver!");
// }

// const isTired = false;
// if (hasDrivingLiecnce && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone alse should driver!");
// }

// Coding Challenge #3
/*
Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
// const teamDolphinsScoreOne = 96;
// const teamDolphinsScoreTwo = 108;
// const teamDolphinsScoreThree = 89;
// const teamDolphineAverageScrore = (teamDolphinsScoreOne + teamDolphinsScoreTwo + teamDolphinsScoreThree) / 3;
// console.log(`Team Dolphi Average Scrore: ${teamDolphineAverageScrore}`);

// const teamKoalasScoreOne = 88;
// const teamKoalasScoreTwo = 91;
// const teamKoalasScoreThree = 110;
// const teamKoalasAverageScrore = (teamKoalasScoreOne + teamKoalasScoreTwo + teamKoalasScoreThree) / 3;
// console.log(`Team Koalas Average Score: ${teamKoalasAverageScrore}`);

// const winnerCheckDolphine = teamDolphineAverageScrore > teamKoalasAverageScrore;
// const winnerCheckKoalas = teamKoalasAverageScrore > teamKoalasAverageScrore;
// console.log(winnerCheckKoalas);
// const drawCheck = teamDolphineAverageScrore === teamKoalasAverageScrore;

// if (teamDolphineAverageScrore > teamKoalasAverageScrore) {
//     console.log(`Team Dolphine is Won With Scrore ${teamDolphineAverageScrore}`);
// } else if(teamKoalasAverageScrore > teamDolphineAverageScrore) {
//     console.log(`Team Koalas is Won With Scrore ${teamKoalasAverageScrore}`);
// }
// else {
//     console.log("Match is draw!!!");
// }

// Bonus 1
const scroreDopphin = (57 + 112 + 101) / 3;
const scoreKaolas = (57 + 112 + 101) / 3;
console.log(scroreDopphin, scoreKaolas);
if (scroreDopphin > scoreKaolas && scroreDopphin >= 100) {
    console.log("Team Dolphine Won");
} else if(scoreKaolas > scroreDopphin && scoreKaolas >= 100) {
    console.log("Team Koalas Won");
}
else {
    console.log("no team wins the trophy");
}