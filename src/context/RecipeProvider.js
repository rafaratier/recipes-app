import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [searchRecipes, setRecipes] = useState({
    meals: [],
    drinks: [],
  });

  return (
    <RecipeContext.Provider
      value={ { setRecipes, searchRecipes } }
    >
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
