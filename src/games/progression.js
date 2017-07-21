import { cons } from 'hexlet-pairs';
import runBrainGame from '..';
import getRandNum from '../getRandNum';

const task = 'What number is missing in this progression?';
const brainProgression = () => {
  const randNum = getRandNum(0, 10);
  const randStep = getRandNum(1, 9);
  const randIndex = getRandNum(0, 9);
  const makeSeq = (num1, num2, acc) => {
    if (acc.length === 10) {
      return acc;
    }
    const nextNum = num1 + num2;
    acc.push(nextNum);
    return makeSeq(nextNum, num2, acc);
  };
  const seqOfNum = makeSeq(randNum, randStep, [randNum]);
  const requiredNum = seqOfNum[randIndex];
  const newSeqOfNum = seqOfNum.map((element, index) => {
    if (index === randIndex) {
      return '..';
    }
    return element;
  }).join(' ');
  return cons(`${newSeqOfNum}`, `${requiredNum}`);
};

export default () => runBrainGame(task, brainProgression);
