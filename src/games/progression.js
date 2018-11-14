import { makeGame } from '..';
import randomInt from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';

const pSize = 10;

const getMember = (firstNum, difference, numIndex) => firstNum + difference * numIndex;

const getProgression = (first, difference, indexOfUnknown, size) => {
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
  const indexOfUnknown = randomInt(10, 0);
  const question = getProgression(first, difference, indexOfUnknown, pSize);
  const rightAnswer = `${getMember(first, difference, indexOfUnknown)}`;
  return cons(question, rightAnswer);
};

export default () => makeGame(description, generator);
