import braingames from '..';

braingames.hello('Answer "yes" if number even otherwise answer "no".');
braingames.getUserName();

const questions = () => {
  const iter = (index) => {
    if (index === braingames.questionAmount) {
      braingames.congrats();
      return;
    }
    const number = braingames.randomNumber();
    const answer = number % 2 === 0 ? 'yes' : 'no';
    braingames.question(`Question: ${number}`);
    const userAnswer = braingames.getAnswer();
    if (userAnswer === answer) {
      braingames.correctAnswer();
      iter(index + 1);
    } else {
      braingames.wrongAnswer(userAnswer, answer);
      braingames.fail();
    }
  };
  return iter(0);
};

export default questions;
