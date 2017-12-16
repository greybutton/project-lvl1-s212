import gameplay from '..';

const description = 'What is the result of the expression?';

const randomNumber = () => Math.floor(Math.random() * ((100 - 0) + 1)) + 0;

const generateQandA = () => {
  const numberFirst = randomNumber();
  const numberSecond = randomNumber();
  const index = Math.floor(Math.random() * ((3 - 1) + 1)) + 1;
  let question;
  let answer;
  switch (index) {
    case 1: {
      question = `${numberFirst} + ${numberSecond}`;
      answer = `${numberFirst + numberSecond}`;
      break;
    }
    case 2: {
      question = `${numberFirst} - ${numberSecond}`;
      answer = `${numberFirst - numberSecond}`;
      break;
    }
    case 3: {
      question = `${numberFirst} * ${numberSecond}`;
      answer = `${numberFirst * numberSecond}`;
      break;
    }
    default: break;
  }
  return {
    question,
    answer,
  };
};

const play = () => gameplay(description, generateQandA);

export default play;
