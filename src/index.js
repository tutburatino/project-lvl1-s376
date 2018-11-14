/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const initGame = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const numberOfSteps = 3;

export const makeGame = (description, generator) => {
  const userName = initGame(description);
  const playGame = (step) => {
    if (step <= 0) {
      console.log(`Congratulations, ${userName}!`);
    }
    if (step > 0) {
      const exercise = generator();
      const question = car(exercise);
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const rightAnswer = cdr(exercise);
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
        return playGame(step - 1);
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  playGame(numberOfSteps);
};
