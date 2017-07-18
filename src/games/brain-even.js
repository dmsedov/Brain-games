import runBrainGame from '..';
import getRandNum from '../functions';

const task = 'Answer "yes" if number even otherwise answer "no"';
const brainEven = () => {
  const randNum = getRandNum(1, 100);
  const isEven = randNum % 2 === 0 ? 'yes' : 'no';
  return [randNum, isEven];
};

export default () => runBrainGame(task, brainEven);
