import readlineSync from 'readline-sync';
import balance from './balance';
import calc from './calc';
import even from './even';
import gcd from './gcd';
import prime from './prime';
import progression from './progression';


export default () => {
  const games = [balance, calc, even, gcd, prime, progression];
  console.log('Welcome to the Brain Games!');
  const index = readlineSync.question(`Please, select a game by number!
  1) brain-balance
  2) brain-calc
  3) brain-even
  4) brain-gcd
  5) brain-prime
  6) brain-progression
Number: `);
  switch (index) {
    case '1':
      return games[0]();
    case '2':
      return games[1]();
    case '3':
      return games[2]();
    case '4':
      return games[3]();
    case '5':
      return games[4]();
    case '6':
      return games[5]();
    default:
      console.log('Exit');
      return '';
  }
};
