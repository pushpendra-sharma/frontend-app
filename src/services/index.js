import axios from 'axios';

const login = payload => axios.post('http://localhost:4000/api/login', payload);

const signUp = payload =>
  axios.post('http://localhost:4000/api/signup', payload);

const createQuiz = payload => {
  const myToken = localStorage.getItem('token');
  axios.post('http://localhost:4000/api/quiz/create', payload, {
    headers: { authorization: myToken },
  });
};

const submitQuiz = payload => {
  const myToken = localStorage.getItem('token');
  axios.post('http://localhost:4000/api/quiz/submit', payload, {
    headers: { authorization: myToken },
  });
};

const getQuiz = id => {
  const myToken = localStorage.getItem('token');
  axios.get(`http://localhost:4000/api/quiz/${id}`, {
    headers: { authorization: myToken },
  });
};

export { login, signUp, createQuiz, submitQuiz, getQuiz };
