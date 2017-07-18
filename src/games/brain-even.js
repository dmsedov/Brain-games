import brainGames from '..';

const task = 'Answer "yes" if number even otherwise answer "no"';
const brainEven = () => {
  const randNum = Math.floor(Math.random() * 100);
  const isEven = randNum % 2 === 0 ? 'yes' : 'no';
  return [randNum, isEven];
};

export default () => brainGames(task, brainEven);
