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

  const round = (step) => {
    if (step <= 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const exercise = generator();
    const question = car(exercise);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(exercise);
    if (!(userAnswer === rightAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
    return round(step - 1);
  };
  round(numberOfSteps);
};
