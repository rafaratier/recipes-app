import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesCard from './RecipesCard';
import RecipeContext from '../context/RecipeContext';

function FoodRecipesShowCase(props) {
  const { recipes } = props;
  const RECIPES_LIMIT = 11;

  const { searchRecipes } = useContext(RecipeContext);

  return (
    <div className="recipes-container">
      {
        searchRecipes.meals && searchRecipes.meals.map((meal) => {
          const { strMealThumb, strMeal, idMeal } = meal;
          return (
            <RecipesCard
              key={ idMeal }
              index={ idMeal }
              recipeThumbnail={ strMealThumb }
              recipeName={ strMeal }
              recipeId={ strMeal }
            />);
        })
      }

      {searchRecipes.meals.length === 0 && recipes && recipes.map((recipe, index) => {
        if (index <= RECIPES_LIMIT) {
          return (
            <RecipesCard
              key={ index }
              index={ index }
              recipeId={ recipe.idMeal }
              recipeThumbnail={ recipe.strMealThumb }
              recipeName={ recipe.strMeal }
              cardType="recipe"
              recipeType="foods"
            />
          );
        }
        return false;
      })}
    </div>
  );
}

FoodRecipesShowCase.propTypes = {
  recipes: PropTypes.instanceOf(Array),
};

FoodRecipesShowCase.defaultProps = {
  recipes: [],
};

export default FoodRecipesShowCase;
