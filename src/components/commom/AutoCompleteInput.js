import React from 'react';
import PropTypes from 'prop-types';

const AutoCompleteInput = ({ list, error, onSearchChange, onAdd, term, isValid }) => {
  return (
    <div>
      <input
        type={'text'}
        name={''}
        value={term}
        onChange={onSearchChange}/>
      <ul>
        {
          list && list.map((item, index) => {
            return <li
              key={index}
              onClick={() => onSearchChange({ target: { name: '', value: item.text }})}
              style={{ display: isValid || term === '' ? "none": "block" }}
            >
              {item.text}
            </li>
          })
        }
      </ul>
      { error && <div className={'alert alert-danger'}>{error}</div> }
      <input
        type={'submit'}
        value={'+'}
        disabled={!isValid}
        onClick={onAdd} />

    </div>
  );
};

AutoCompleteInput.propTypes = {
  list: PropTypes.array.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default AutoCompleteInput;