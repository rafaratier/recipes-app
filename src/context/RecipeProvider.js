import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [ingredient, setIngredient] = useState('');

  const value = {
    recipes,
    setRecipes,
    ingredient,
    setIngredient,
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
