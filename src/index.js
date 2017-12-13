import readlineSync from 'readline-sync';

const braingames = ({ description, logic }) => {
  console.log('Welcome to the Brain Games!');
  if (description) {
    console.log(description);
  }
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello,', userName);
  console.log('');

  if (logic) {
    const fail = () => {
      console.log(`Let's try again, ${userName}!`);
    };

    const questionCount = 3;
    const showQuestions = () => {
      const iter = (index) => {
        if (index === questionCount) {
          console.log(`Congratulations, ${userName}!`);
          return;
        }
        const { question, answer } = logic();
        console.log(`Question: ${question}`);
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
    showQuestions();
  }
};

export default braingames;
