import gameplay from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const logic = () => {
  const number = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return {
    question: number,
    answer,
  };
};

const game = () => gameplay({ description, logic });

export default game;
