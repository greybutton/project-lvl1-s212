import readlineSync from 'readline-sync';

const braingames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', userName);
};

const braineven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
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
      const number = randomNumber();
      const answer = number % 2 === 0 ? 'yes' : 'no';
      console.log(`Question: ${number}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
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

export { braingames, braineven };
