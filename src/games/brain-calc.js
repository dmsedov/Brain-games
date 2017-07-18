import brainGames from '..';

const task = 'What is the result of the expression?';

const brainCalc = () => {
  const operations = ['+', '-', '*'];
  const getRandOperation = (arr) => {
    const indexOfItem = Math.floor(Math.random() * arr.length);
    return arr[indexOfItem];
  };
  const randOperator = getRandOperation(operations);
  const randNum1 = Math.floor(Math.random() * 100);
  const randNum2 = Math.floor(Math.random() * 100);
  const evaluation = () => {
    switch (randOperator) {
      case '+':
        return randNum1 + randNum2;
      case '-':
        return randNum1 - randNum2;
      default:
        return randNum1 * randNum2;
    }
  };
  return [`${randNum1}${randOperator}${randNum2}`, `${evaluation()}`];
};

console.log(brainGames(task, brainCalc));
