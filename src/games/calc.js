import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', userName);
  console.log('');

  const min = 0;
  const max = 100;
  const randomNumber = () => Math.floor(Math.random() * ((max - min) + 1)) + min;
  const questionAmount = 3;
  const fail = () => {
    console.log(`Let's try again, ${userName}!`);
  };
  const questions = () => {
    const iter = (index) => {
      if (index === questionAmount) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      const numberFirst = randomNumber();
      const numberSecond = randomNumber();
      let operation;
      let answer;
      switch (index) {
        case 0: {
          operation = '+';
          answer = numberFirst + numberSecond;
          break;
        }
        case 1: {
          operation = '-';
          answer = numberFirst - numberSecond;
          break;
        }
        case 2: {
          operation = '*';
          answer = numberFirst * numberSecond;
          break;
        }
        default: break;
      }
      console.log(`Question: ${numberFirst} ${operation} ${numberSecond}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (Number(userAnswer) === answer) {
        console.log('Correct!');
        iter(index + 1);
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        fail();
      }
    };
    return iter(0);
  };
  questions();
};

export default calc;
