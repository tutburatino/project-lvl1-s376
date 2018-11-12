import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import randomInt from '../utils';

const description = 'What is the result of the expression?';

const getRandomSign = () => {
  switch (randomInt(3)) {
    case 2: return '*';
    case 1: return '-';
    default: return '+';
  }
};

const calculator = (a, b, sign) => {
  switch (sign) {
    case '*': return `${a * b}`;
    case '+': return `${a + b}`;
    case '-': return `${a - b}`;
    default: return 'Error!';
  }
};

const generator = () => {
  const a = randomInt(10);
  const b = randomInt(10);
  const sign = getRandomSign();
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = calculator(a, b, sign);
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
