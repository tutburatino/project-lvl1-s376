import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const initGame = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const numberOfSteps = 3;

const check = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

export const makeGame = (generator) => {
  const iter = (step) => {
    if (step <= 0) { return true; }
    const exercise = generator();
    const question = car(exercise);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(exercise);
    if (!check(userAnswer, rightAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return false;
    }
    console.log('Correct!');
    return iter(step - 1);
  };
  return iter(numberOfSteps);
};

export const gameResult = (result, userName) => {
  if (result) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  console.log(`Let's try again, ${userName}!`);
};
