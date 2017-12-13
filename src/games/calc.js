import braingames from '..';

const calc = () =>
  braingames({
    description: 'What is the result of the expression?',
    logic: () => {
      const numberFirst = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
      const numberSecond = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
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
    },
  });

export default calc;
