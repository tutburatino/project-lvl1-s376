import { makeGame } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) { return false; }
  for (let i = 2; i < num; i += 1) { if (num % i === 0) { return false; } }
  return true;
};

const checkPrime = a => (isPrime(a) ? 'yes' : 'no');

const generator = () => {
  const number = randomInt(10);
  const question = `${number}`;
  const rightAnswer = `${checkPrime(number)}`;
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
