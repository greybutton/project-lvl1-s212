import gameplay from '..';

const description = 'Is this number prime?';

const logic = () => {
  const randomNumber = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
  const answer = randomNumber % 2 === 0;
  return {
    question: randomNumber,
    answer: `${answer}`,
  };
};

const game = () => gameplay({ description, logic });

export default game;
