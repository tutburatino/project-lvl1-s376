import { cons, car, cdr } from 'hexlet-pairs';
import { makeGame, initGame, gameResult } from '..';
import randomInt from '../utils';

const description = 'What is the result of the expression?';

const getSign = expr => car(expr);
const get1stMember = expr => car(cdr(expr));
const get2ndMember = expr => cdr(cdr(expr));

const getRandomSign = () => {
  const random = randomInt(3);
  switch (random) {
    case 2: return '*';
    case 1: return '-';
    default: return '+';
  }
};

const expressionToString = (expr) => {
  const a = get1stMember(expr);
  const b = get2ndMember(expr);
  const sign = getSign(expr);
  return `${a} ${sign} ${b}`;
};

const getRandExpres = () => {
  const a = randomInt(10);
  const b = randomInt(10);
  const sign = getRandomSign();
  return cons(sign, cons(a, b));
};

const calculator = (expr) => {
  const a = get1stMember(expr);
  const b = get2ndMember(expr);
  switch (getSign(expr)) {
    case '*': return `${a * b}`;
    case '+': return `${a + b}`;
    case '-': return `${a - b}`;
    default: return 'Error!';
  }
};

const generator = () => {
  const expression = getRandExpres();
  const question = expressionToString(expression);
  const rightAnswer = calculator(expression);
  return cons(question, rightAnswer);
};

export default () => {
  const userGame = initGame(description);
  const result = makeGame(generator);
  gameResult(result, userGame);
};
