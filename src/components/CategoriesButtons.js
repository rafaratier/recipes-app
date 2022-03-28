import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CategoriesButtons(props) {
  const { categories } = props;
  const CATEGORIES_LIMIT = 4;

  const [buttonValue, setButtonValue] = useState('all');
  console.log(buttonValue);

  const handleClick = ({ target }) => {
    if (target.checked) {
      setButtonValue(target.value);
    }
    if (target.value === buttonValue) {
      target.checked = false;
      setButtonValue('all');
    }
  };

  return (
    <div>
      <label htmlFor="category">
        All
        <input
          data-testid="All-category-filter"
          name="category"
          id="all"
          type="radio"
          value="all"
          onClick={ ({ target }) => (target.checked
            ? setButtonValue(target.value) : setButtonValue('all')) }
        />
      </label>
      {categories.map((category, index) => {
        if (index <= CATEGORIES_LIMIT) {
          return (
            <label htmlFor="category" key={ index }>
              { category.strCategory }
              <input
                data-testid={ `${category.strCategory}-category-filter` }
                name="category"
                id={ category.strCategory }
                type="radio"
                value={ category.strCategory }
                onClick={ ({ target }) => handleClick({ target }) }
              />
            </label>
          );
        }
        return false;
      })}
    </div>
  );
}

CategoriesButtons.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default CategoriesButtons;
