const loginSelector = state => state.auth.isLoggedIn;
const quizSelector = state => state.quiz;

export { loginSelector, quizSelector };
