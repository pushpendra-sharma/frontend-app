import PropTypes from 'prop-types';
import Question from './Question';
import '../styles/quiz.css';
import { useEffect } from 'react';
import { getQuiz } from '../services';
import { useNavigate, useParams } from 'react-router-dom';

const Quiz = props => {
  const { questions, title } = props;
  const { id } = useParams();

  const userId = localStorage.getItem('localUserId');
  const navigate = useNavigate();

  const getMyQuiz = async id => {
    const quiz = await getQuiz(id);
    console.log(':::quiz', quiz);
  };

  useEffect(() => {
    getMyQuiz(id);
  }, []);

  return (
    <div className='quiz-container'>
      <h2 className='quiz-header'>{title}</h2>
      <p className='quiz-desc'>Answers the following questions</p>
      {/* {questions.map(q => (
        <Question />
      ))} */}
      <Question />
      <Question />
      <Question />
    </div>
  );
};

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Quiz.defaultProps = {
  title: 'Quiz',
  questions: [],
};

export default Quiz;
