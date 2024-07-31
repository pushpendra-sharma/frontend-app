const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { ...state, ...action.payload };
    case 'LOGIN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer
