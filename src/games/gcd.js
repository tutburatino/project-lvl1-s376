import { makeGame } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  const greatest = a >= b ? a : b;
  const smallest = a < b ? a : b;
  if (smallest === 0) { return 0; }
  const rest = greatest - smallest;
  return rest === 0 ? smallest : greatestCommonDivisor(rest, smallest);
};

const generator = () => {
  const a = randomInt(10);
  const b = randomInt(10);
  const question = `${a} ${b}`;
  const rightAnswer = `${greatestCommonDivisor(a, b)}`;
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
