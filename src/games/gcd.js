import braingames from '..';

const gcd = () =>
  braingames({
    description: 'Find the greatest common divisor of given numbers.',
    logic: () => {
      const numberFirst = Math.floor(Math.random() * ((10 - 0) + 1)) + 0;
      const numberSecond = Math.floor(Math.random() * ((10 - 0) + 1)) + 0;
      const euclid = (a, b) => {
        const r = a % b;
        if (r === 0) {
          return b;
        }
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
