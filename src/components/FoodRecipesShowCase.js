import React from 'react';
import PropTypes from 'prop-types';
import RecipesCard from './RecipesCard';

function FoodRecipesShowCase(props) {
  const { recipes } = props;
  const RECIPES_LIMIT = 11;

  return (
    <div className="recipes-container">
      {recipes && recipes.map((recipe, index) => {
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
