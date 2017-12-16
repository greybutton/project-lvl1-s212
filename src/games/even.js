import gameplay from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const randomNumber = () => Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
const isEven = num => num % 2 === 0;

const generateQandA = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

const play = () => gameplay(description, generateQandA);

export default play;
