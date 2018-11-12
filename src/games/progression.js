import { makeGame, initGame, gameResult } from '..';
import randomInt from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';

const getRandomFirstNumber = () => randomInt(10);
const getRandomDifference = () => randomInt(4, 1);

const size = 10;

const getFirstDifference = () => cons(getRandomFirstNumber(), getRandomDifference());

const getMember = (serialNum, firstNum, difference) => firstNum + difference * (serialNum - 1);

const getFirstMember = expr => car(expr);
const getDifference = expr => cdr(expr);

const getMissingMember = (progression) => {
  const firstMember = getFirstMember(progression);
  const difference = getDifference(progression);
  const serialNumber = 6;
  return `${getMember(serialNumber, firstMember, difference)}`;
};

const progressToQuest = (progression) => {
  const a = getFirstMember(progression);
  const d = getDifference(progression);
  const iter = (strDiff, acc) => {
    if (acc >= size) { return strDiff; }
    const nextMember = a + d * acc;
    if (acc === 5) {
      return iter(`${strDiff} ..`, acc + 1);
    }
    return iter(`${strDiff} ${nextMember}`, acc + 1);
  };
  const index = 1;
  return iter(`${a}`, index);
};

const generator = () => {
  const expression = getFirstDifference();
  const question = progressToQuest(expression);
  const rightAnswer = getMissingMember(expression);
  return cons(question, rightAnswer);
};

export default () => {
  const userGame = initGame(description);
  const result = makeGame(generator);
  gameResult(result, userGame);
};
