import { makeGame, initGame, gameResult } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const expressionToString = expr => expr;
const getExpression = () => randomInt(20);
const calculator = expr => (isEven(expr) ? 'yes' : 'no');

const generator = () => {
  const expression = getExpression();
  const question = expressionToString(expression);
  const rightAnswer = calculator(expression);
  return cons(question, rightAnswer);
};

export default () => {
  const userGame = initGame(description);
  const result = makeGame(generator);
  gameResult(result, userGame);
};
