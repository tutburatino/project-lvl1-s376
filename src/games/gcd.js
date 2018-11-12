import { makeGame, initGame, gameResult } from '..';
import randomInt from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const get1stMember = expr => car(expr);
const get2ndMember = expr => cdr(expr);

const getGreatestDivisor = (a, b) => {
  const greatest = a >= b ? a : b;
  const smallest = a < b ? a : b;
  if (smallest === 0) { return 0; }
  const rest = greatest - smallest;
  return rest === 0 ? smallest : getGreatestDivisor(rest, smallest);
};

const ints2string = (expr) => {
  const a = get1stMember(expr);
  const b = get2ndMember(expr);
  return `${a} ${b}`;
};

const getIntPair = () => {
  const a = randomInt(10);
  const b = randomInt(10);
  return cons(a, b);
};

const gcd2string = (expr) => {
  const a = get1stMember(expr);
  const b = get2ndMember(expr);
  return `${getGreatestDivisor(a, b)}`;
};

const generator = () => {
  const expression = getIntPair();
  const question = ints2string(expression);
  const rightAnswer = gcd2string(expression);
  return cons(question, rightAnswer);
};

export default () => {
  const userGame = initGame(description);
  const result = makeGame(generator);
  gameResult(result, userGame);
};
