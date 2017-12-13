import braingames from '..';

const even = () =>
  braingames({
    description: 'Answer "yes" if number even otherwise answer "no".',
    logic: () => {
      const number = Math.floor(Math.random() * ((100 - 0) + 1)) + 0;
      const answer = number % 2 === 0 ? 'yes' : 'no';
      return {
        question: number,
        answer,
      };
    },
  });

export default even;
