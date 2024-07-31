import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/checkbox.css';

const CheckBox = props => {
  const { options, title, id } = props;

  const [values, setvalues] = useState([]);

  return (
    <ul className='checkbox-container'>
      {options.map(item => (
        <li className='list-non-bullet' key={item.label}>
          <label htmlFor={item.label} className='checkbox-label'>
            <input
              type='checkbox'
              id={item.label}
              className='checkox-input'
              onChange={e => console.log(e)}
              value={item.value}
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
};

CheckBox.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

CheckBox.defaultProps = {
  id: 'checkbox',
};

export default CheckBox;
