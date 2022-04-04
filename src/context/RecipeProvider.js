import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [searchRecipes, setRecipes] = useState({
    meals: [],
    drinks: [],
  });

  const [recipes, setRecipesMain] = useState([]);
  const [ingredient, setIngredient] = useState('');

  const value = {
    recipes,
    setRecipesMain,
    ingredient,
    setIngredient,
    searchRecipes,
    setRecipes,
  };

  return (
    <RecipeContext.Provider
      value={ value }
    >
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);

  if (context === 'undefined') {
    throw new Error('useRecipeContext não existe');
  }

  return context;
};

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
