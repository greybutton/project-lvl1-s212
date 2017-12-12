import braingames from '..';

braingames.hello('What is the result of the expression?');
braingames.getUserName();

const questions = () => {
  const iter = (index) => {
    if (index === braingames.questionAmount) {
      braingames.congrats();
      return;
    }
    const numberFirst = braingames.randomNumber();
    const numberSecond = braingames.randomNumber();
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
    braingames.question(`Question: ${numberFirst} ${operation} ${numberSecond}`);
    const userAnswer = braingames.getAnswer();
    if (Number(userAnswer) === answer) {
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
