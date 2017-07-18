import readlineSync from 'readline-sync';

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
    const [parameter, correctAnswer] = game();
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
