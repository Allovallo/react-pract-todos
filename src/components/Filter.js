import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Фільтр за ім'ям: <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

export default Filter;
