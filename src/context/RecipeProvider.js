import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  const [favoriteUpdate, setFavoriteUpdate] = useState([0]);

  const INITIAL_CHECKBOX = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const INITIAL_DATA = {
    meals: [{
      idMeal: '',
      strMeal: 'Carregando...',
      strDrinkAlternate: null,
      strCategory: '',
      strArea: 'J',
      strInstructions: '',
      strMealThumb: '',
      strTags: '',
      strYoutube: '',
      strIngredient1: '',
      strIngredient2: '',
      strIngredient3: '',
      strIngredient4: '',
      strIngredient5: '',
      strIngredient6: '',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: '',
      strMeasure2: '1',
      strMeasure3: '',
      strMeasure4: '',
      strMeasure5: '',
      strMeasure6: '',
      strMeasure7: '',
      strMeasure8: '',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strSource: '',
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null }] };

  const INITIAL_DRINK_DATA = {
    drinks: [{
      idDrink: '',
      strDrink: 'Carregando...',
      strDrinkAlternate: null,
      strCategory: '',
      strArea: 'J',
      strInstructions: '',
      strDrinkThumb: '',
      strTags: '',
      strYoutube: '',
      strIngredient1: '',
      strIngredient2: '',
      strIngredient3: '',
      strIngredient4: '',
      strIngredient5: '',
      strIngredient6: '',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strMeasure1: '',
      strMeasure2: '1',
      strMeasure3: '',
      strMeasure4: '',
      strMeasure5: '',
      strMeasure6: '',
      strMeasure7: '',
      strMeasure8: '',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strSource: '',
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null }] };

  const processInStorage = () => {
    const recipeInStorage = localStorage.getItem('inProgressRecipes');
    return JSON.parse(recipeInStorage);
  };

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
    INITIAL_CHECKBOX,
    INITIAL_DATA,
    processInStorage,
    INITIAL_DRINK_DATA,
    favoriteUpdate,
    setFavoriteUpdate,
  };

  return (
    <RecipeContext.Provider value={ value }>
      {children}
    </RecipeContext.Provider>);
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
