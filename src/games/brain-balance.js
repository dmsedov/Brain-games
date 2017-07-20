import { cons } from 'hexlet-pairs';
import runBrainGame from '..';
import getRandNum from '../getRandNum';

const task = 'What is the result of the expression?';
const brainBalance = () => {
  const randNum = getRandNum(10, 9999);
  const arrOfNum = Array.from(randNum.toString()).map(item => Number(item)).sort();
  const getBalanceNum = (arr) => {
    const firstEl = arr[0];
    const lastEl = arr[arr.length - 1];
    if (lastEl - firstEl < 2) {
      return arr;
    }
    const newArr = arr.map((element, index) => {
      if (index === 0) {
        return element + 1;
      } else if (index === arr.length - 1) {
        return element - 1;
      }
      return element;
    });
    return getBalanceNum(newArr.sort());
  };
  const balancedNum = getBalanceNum(arrOfNum).join('');
  return cons(`${randNum}`, `${balancedNum}`);
};

export default () => runBrainGame(task, brainBalance);
