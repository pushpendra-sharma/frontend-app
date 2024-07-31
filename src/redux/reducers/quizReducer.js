const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_QUIZ':
      return { ...state, ...action.payload };
    case 'SUBMIT_QUIZ':
      return { ...state, ...action.payload };
    case 'GET_QUIZ':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default quizReducer;
