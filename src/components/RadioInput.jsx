import PropTypes from 'prop-types';
import { useState } from 'react';
const RadioInput = props => {
  const { options, title, id } = props;

  const [value, setvalue] = useState('');

  const handleChange = e => {
    setvalue(e.target.value);
    console.log(value);
  };

  return (
    <div className='filter-container'>
      <p className='filter-criteria-title-container'>
        <span className='filter-criteria-title'>{title}</span>
      </p>
      <ul className='list-non-bullet'>
        {options.map(item => (
          <li className='list-item' key={item.label}>
            <input
              name={title}
              type='radio'
              id={item.label}
              className='check-input'
              onChange={e => handleChange(e)}
              value={item.value}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

RadioInput.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  // onChange: PropTypes.func.isRequired,
};

RadioInput.defaultProps = {
  id: 'radioButtons',
};

export default RadioInput;
