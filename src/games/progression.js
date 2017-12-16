import gameplay from '..';

const description = 'What number is missing in this progression?';

const progressionLength = 10;
const randomNumber = () => Math.floor(Math.random() * ((10 - 0) + 1)) + 0;

const generateQandA = () => {
  const start = randomNumber();
  const step = randomNumber();
  const gap = randomNumber();
  const numbers = Array(progressionLength).fill(null).map((e, i) => start + (step * i));
  const question = numbers.map((e, i) => (i === gap ? '..' : e)).join(' ');
  const answer = numbers[gap];
  return {
    question,
    answer: `${answer}`,
  };
};

const play = () => gameplay(description, generateQandA);

export default play;
