import { makeGame } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const check = expr => (isEven(expr) ? 'yes' : 'no');

const generator = () => {
  const number = randomInt(20);
  const question = `${number}`;
  const rightAnswer = check(number);
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
