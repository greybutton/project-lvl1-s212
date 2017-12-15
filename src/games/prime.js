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

const logic = () => {
  const randomNumber = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
  const answer = isPrime(randomNumber);
  return {
    question: randomNumber,
    answer: `${answer}`,
  };
};

const game = () => gameplay({ description, logic });

export default game;
