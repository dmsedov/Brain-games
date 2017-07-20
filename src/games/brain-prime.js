import { cons } from 'hexlet-pairs';
import runBrainGame from '..';
import getRandNum from '../getRandNum';

const task = 'Is it prime number?';
const brainPrime = () => {
  const randNum = getRandNum(2, 50);
  const isPrime = (number) => {
    const iter = (acc, num) => {
      if (acc <= Math.sqrt(num)) {
        if (num % acc === 0) {
          return false;
        }
        return iter(acc + 1, num);
      }
      return true;
    };
    return iter(2, number);
  };
  const rightAnswer = isPrime(randNum) ? 'yes' : 'no';
  return cons(`${randNum}`, `${rightAnswer}`);
};

export default () => runBrainGame(task, brainPrime);
