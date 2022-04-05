import React from 'react';

function InputRadioButton(labelName, datatestid, handleSearchFor) {
  return (
    <label htmlFor="radioButton">
      { labelName }
      <input
        name="radioButton"
        type="radio"
        value={ labelName }
        data-testid={ datatestid }
        onChange={ ({ target }) => handleSearchFor(target.value) }
      />
    </label>
  );
}

export default InputRadioButton;
