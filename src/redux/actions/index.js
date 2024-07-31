const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';
const CREATE_QUIZ = 'CREATE_QUIZ';
const SUBMIT_QUIZ = 'SUBMIT_QUIZ';
const GET_QUIZ = 'GET_QUIZ';

const signUpUser = payload => ({
  type: SIGNUP,
  payload,
});

const loginUser = payload => ({
  type: LOGIN,
  payload,
});

const getQuiz = () => ({
  type: GET_QUIZ,
});

const submitQuiz = payload => ({
  type: SUBMIT_QUIZ,
  payload,
});

const createQuiz = payload => ({
  type: CREATE_QUIZ,
  payload,
});

const setError = error => ({
  type: 'ERROR',
  error,
});

const setSuccess = error => ({
  type: 'ERROR',
  error,
});

export { signUpUser, loginUser, getQuiz, submitQuiz, createQuiz, setError };
