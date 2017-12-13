import braingames from '..';

const gcd = () =>
  braingames({
    description: 'Find the greatest common divisor of given numbers.',
    logic: () => {
      const numberFirst = Math.floor(Math.random() * ((10 - 0) + 1)) + 0;
      const numberSecond = Math.floor(Math.random() * ((10 - 0) + 1)) + 0;
      const euclid = (a, b) => {
        if (b === 0) {
          return a;
        }
        const r = a % b;
        return euclid(b, r);
      };
      const answer = euclid(numberFirst, numberSecond);
      return {
        question: `${numberFirst} ${numberSecond}`,
        answer: `${answer}`,
      };
    },
  });

export default gcd;
