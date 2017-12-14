import gameplay from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const r = a % b;
  return gcd(b, r);
};

const logic = () => {
  const numberFirst = Math.floor(Math.random() * ((10 - 0) + 1)) + 0;
  const numberSecond = Math.floor(Math.random() * ((10 - 0) + 1)) + 0;
  const answer = gcd(numberFirst, numberSecond);
  return {
    question: `${numberFirst} ${numberSecond}`,
    answer: `${answer}`,
  };
};

const game = () => gameplay({ description, logic });

export default game;
