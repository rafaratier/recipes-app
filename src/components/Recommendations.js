import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllFoodRecipes } from '../helpers/fetchFoodRecipes';
import { getAllDrinksRecipes } from '../helpers/fetchDrinksRecipes';
import RecipesCard from './RecipesCard';

function Recommendations(props) {
  const SUGGESTIONS_CARD_LIMIT = 5;

  const [recipes, setRecipes] = useState();

  const { suggestionType } = props;

  useEffect(() => {
    const fetchRecipes = async () => {
      let result;
      if (suggestionType === 'food') {
        result = await getAllFoodRecipes();
        setRecipes(result.meals);
      } else {
        result = await getAllDrinksRecipes();
        setRecipes(result.drinks);
      }
    };

    fetchRecipes();
  }, [suggestionType]);

  return (
    <div className="suggestions-container">
      {recipes && recipes.map((recipe, index) => {
        if (index <= SUGGESTIONS_CARD_LIMIT) {
          return (
            <RecipesCard
              cardType="recomendation"
              key={ index }
              index={ index }
              recipeId={ recipe.idMeal || recipe.idDrink }
              recipeThumbnail={ recipe.strMealThumb || recipe.strDrinkThumb }
              recipeName={ recipe.strMeal || recipe.strDrink }
            />
          );
        }
        return false;
      })}
    </div>
  );
}

Recommendations.propTypes = {
  suggestionType: PropTypes.string.isRequired,
};

export default Recommendations;
