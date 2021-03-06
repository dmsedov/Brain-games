import { cons } from 'hexlet-pairs';
import runBrainGame from '..';
import getRandNum from '../getRandNum';

const task = 'Answer "yes" if number even otherwise answer "no"';
const brainEven = () => {
  const randNum = getRandNum(1, 100);
  const isEven = randNum % 2 === 0 ? 'yes' : 'no';
  return cons(randNum, isEven);
};

export default () => runBrainGame(task, brainEven);
