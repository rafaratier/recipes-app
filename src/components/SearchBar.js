import React from 'react';
import { useLocation } from 'react-router-dom';
import InputRadioButton from './InputRadioButton';

function SearchBar(handleSearch, handleSearchFor, fetchByMeals, fetchByDrinks) {
  const { pathname } = useLocation();

  const getRecipes = () => {
    if (pathname.includes('foods')) {
      fetchByMeals();
    }

    if (pathname.includes('drinks')) {
      fetchByDrinks();
    }
  };

  return (
    <>
      { InputRadioButton('ingredient', 'ingredient-search-radio', handleSearchFor) }
      { InputRadioButton('name', 'name-search-radio', handleSearchFor) }
      { InputRadioButton('first letter', 'first-letter-search-radio', handleSearchFor) }

      <label htmlFor="searchInput">
        Search:
        <input
          type="text"
          name="searchInput"
          data-testid="search-input"
          onChange={ ({ target }) => handleSearch(target) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ getRecipes }
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;
