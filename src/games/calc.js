import { cons } from 'hexlet-pairs';
import runBrainGame from '..';
import getRandNum from '../getRandNum';

const task = 'What is the result of the expression?';

const brainCalc = () => {
  const getRandOperation = (num) => {
    switch (num) {
      case 1:
        return '+';
      case 2:
        return '-';
      default:
        return '*';
    }
  };
  const randOperator = getRandOperation(getRandNum(1, 3));
  const randNum1 = getRandNum(1, 20);
  const randNum2 = getRandNum(1, 20);
  const evaluateForm = (num1, num2, sign) => {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const value = evaluateForm(randNum1, randNum2, randOperator);
  return cons(`${randNum1}${randOperator}${randNum2}`, `${value}`);
};

export default () => runBrainGame(task, brainCalc);
