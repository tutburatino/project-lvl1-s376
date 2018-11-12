import { makeGame } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';

const size = 10;
const indexOfUnknown = 5;

const getMember = (numIndex, firstNum, difference) => firstNum + difference * numIndex;

const printProgression = (first, difference) => {
  const iter = (strDiff, acc) => {
    if (acc >= size) { return strDiff; }
    const nextMember = first + difference * acc;
    if (acc === indexOfUnknown) {
      return iter(`${strDiff} ..`, acc + 1);
    }
    return iter(`${strDiff} ${nextMember}`, acc + 1);
  };
  const index = 1;
  return iter(`${first}`, index);
};

const generator = () => {
  const first = randomInt(10);
  const difference = randomInt(4, 1);
  const question = printProgression(first, difference);
  const rightAnswer = `${getMember(indexOfUnknown, first, difference)}`;
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
