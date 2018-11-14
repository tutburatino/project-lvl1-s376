import { makeGame } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';

const indexOfUnknown = 5;
const pSize = 10;

const getMember = (numIndex, firstNum, difference) => firstNum + difference * numIndex;

const getProgression = (first, difference, size) => {
  const iter = (acc, counter) => {
    if (counter >= size) { return acc; }
    const nextMember = first + difference * counter;
    if (counter === indexOfUnknown) {
      return iter(`${acc} ..`, counter + 1);
    }
    return iter(`${acc} ${nextMember}`, counter + 1);
  };
  const index = 1;
  return iter(`${first}`, index);
};

const generator = () => {
  const first = randomInt(10);
  const difference = randomInt(4, 1);
  const question = getProgression(first, difference, pSize);
  const rightAnswer = `${getMember(indexOfUnknown, first, difference)}`;
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
