import gameplay from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const setQandA = () => {
  const number = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return {
    question: number,
    answer,
  };
};

const play = () => gameplay({ description, setQandA });

export default play;
