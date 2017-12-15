import gameplay from '..';

const description = 'Balance the given number.';

const balance = (nums, indexMin, indexMax) => {
  const numbers = nums;
  numbers[indexMin] = Number(numbers[indexMin]) + 1;
  numbers[indexMax] -= 1;
  const num = numbers.sort((a, b) => a - b).join('');
  return num;
};

const checkBalance = (num) => {
  const numbers = num.toString().split('');
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  if (max - min > 1) {
    const indexMin = numbers.indexOf(`${min}`);
    const indexMax = numbers.indexOf(`${max}`);
    const newNum = balance(numbers, indexMin, indexMax);
    return checkBalance(newNum);
  }
  return num;
};

const setQandA = () => {
  const number = Math.floor(Math.random() * ((1000 - 100) + 1)) + 100;
  const answer = checkBalance(number);
  return {
    question: number,
    answer: `${answer}`,
  };
};

const play = () => gameplay({ description, setQandA });

export default play;
