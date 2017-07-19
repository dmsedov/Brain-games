import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (task, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const countOfRounds = 3;
  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const expectedResult = game();
    const parameter = car(expectedResult);
    const correctAnswer = cdr(expectedResult);
    console.log(parameter, correctAnswer, '!!!!');
    console.log(`Question: ${parameter}`);
    const actual = readlineSync.question('Your answer: ');
    if (actual === correctAnswer) {
      console.log('Correct!');
      iter(acc - 1);
    } else {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
    }
  };
  iter(countOfRounds);
};
