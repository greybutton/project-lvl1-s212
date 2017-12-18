import gameplay from '..';

const description = 'Balance the given number.';

const balance = (nums, indexMin, indexMax) => {
  const numbers = nums;
  const num = numbers.map((e, i) => {
    if (i === indexMin) {
      return e + 1;
    }
    if (i === indexMax) {
      return e - 1;
    }
    return e;
  })
    .sort((a, b) => a - b)
    .join('');
  return num;
};

const checkBalance = (num) => {
  const numbers = num.toString().split('').map(el => Number(el));
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  if (max - min > 1) {
    const indexMin = numbers.indexOf(min);
    const indexMax = numbers.indexOf(max);
    const newNum = balance(numbers, indexMin, indexMax);
    return checkBalance(newNum);
  }
  return num;
};

const randomNumber = () => Math.floor(Math.random() * ((1000 - 100) + 1)) + 100;

const generateQandA = () => {
  const question = randomNumber();
  const answer = String(checkBalance(question));
  return {
    question,
    answer,
  };
};

const play = () => gameplay(description, generateQandA);

export default play;
