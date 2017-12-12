import readlineSync from 'readline-sync';

const hello = (gamedescription) => {
  if (gamedescription) {
    console.log('Welcome to the Brain Games!');
    console.log(gamedescription);
  } else {
    console.log('Welcome to the Brain Games!');
  }
  console.log('');
};

let userName;
const getUserName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log('Hello,', username);
  console.log('');
  userName = username;
};

const min = 0;
const max = 100;
const randomNumber = () => Math.floor(Math.random() * ((max - min) + 1)) + min;
const questionAmount = 3;

const question = (string) => {
  console.log(string);
};

const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const fail = () => {
  console.log(`Let's try again, ${userName}!`);
};

const congrats = () => {
  console.log(`Congratulations, ${userName}!`);
};

const correctAnswer = () => {
  console.log('Correct!');
};

const wrongAnswer = (userAnswer, answer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
};

const braingames = {
  hello,
  getUserName,
  randomNumber,
  questionAmount,
  question,
  getAnswer,
  fail,
  congrats,
  correctAnswer,
  wrongAnswer,
};

export default braingames;
