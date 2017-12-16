import gameplay from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const r = a % b;
  return gcd(b, r);
};

const randomNumber = () => Math.floor(Math.random() * ((10 - 0) + 1)) + 0;

const generateQandA = () => {
  const numberFirst = randomNumber();
  const numberSecond = randomNumber();
  const answer = gcd(numberFirst, numberSecond);
  return {
    question: `${numberFirst} ${numberSecond}`,
    answer: `${answer}`,
  };
};

const play = () => gameplay(description, generateQandA);

export default play;
