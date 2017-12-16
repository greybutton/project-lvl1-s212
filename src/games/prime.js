import gameplay from '..';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  const start = 5;
  const iter = (i) => {
    if (i * i > num) {
      return true;
    }
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    return iter(i + 6);
  };
  return iter(start);
};

const randomNumber = () => Math.floor(Math.random() * ((100 - 0) + 1)) + 0;

const generateQandA = () => {
  const question = randomNumber();
  const answer = isPrime(question);
  return {
    question,
    answer: `${answer}`,
  };
};

const play = () => gameplay(description, generateQandA);

export default play;
