import { cons } from 'hexlet-pairs';
import runBrainGame from '..';
import getRandNum from '../functions';

const task = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const randNum1 = getRandNum(0, 50);
  const randNum2 = getRandNum(0, 50);
  const defineGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return defineGcd(num2, num1 % num2);
  };
  const commonDiv = defineGcd(randNum1, randNum2);
  return cons(`${randNum1} ${randNum2}`, `${commonDiv}`);
};

export default () => runBrainGame(task, brainGcd);
