import PropTypes from 'prop-types';
import { useState } from 'react';
import CheckBox from './CheckBox';
import '../styles/question.css';

const Question = props => {
  const { options, title, id } = props;

  const [values, setvalues] = useState([]);

  return (
    <div className='ques-container'>
      <div className='ques-header'>
        <p>What is the value of 5 + 5 ?</p>
        <div className='ques-details'>
          <span>2 Mark(s), MCQ</span>
          {/* <span>MCQ</span> */}
          <span>Difficulty level: 1</span>
        </div>
      </div>
      <CheckBox
        options={[
          { label: '10', value: 10 },
          { label: '20', value: 20 },
          { label: '30', value: 30 },
          { label: '40', value: 40 },
        ]}
      />
    </div>
  );
};

Question.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Question.defaultProps = {
  id: 'checkbox',
};

export default Question;
