import React from 'react';
import PropTypes from 'prop-types';

function CategoriesButtons(props) {
  const { categories, selectedCategory, getSelectedCategory } = props;
  const CATEGORIES_LIMIT = 4;

  const handleClick = ({ target }) => {
    if (target.checked) {
      getSelectedCategory(target.value);
    }
    if (target.value === selectedCategory) {
      target.checked = false;
      getSelectedCategory('all');
    }
  };

  return (
    <div className="categories-container">
      <label htmlFor="category">
        All
        <input
          data-testid="All-category-filter"
          name="category"
          id="all"
          type="radio"
          value="all"
          onClick={ ({ target }) => (target.checked
            ? getSelectedCategory(target.value) : getSelectedCategory('all')) }
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
  getSelectedCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default CategoriesButtons;
