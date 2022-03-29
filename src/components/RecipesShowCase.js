import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';

function RecipesShowCase(props) {
  const { recipes } = props;
  const RECIPES_LIMIT = 11;

  return (
    <div>
      {recipes && recipes.map((recipe, index) => {
        if (index <= RECIPES_LIMIT) {
          return (
            <RecipeCard
              key={ index }
              recipeThumbnail={ recipe.strMealThumb }
              recipeName={ recipe.strMeal }
            />
          );
        }
        return false;
      })}
    </div>
  );
}

RecipesShowCase.propTypes = {
  recipes: PropTypes.instanceOf(Array),
};

RecipesShowCase.defaultProps = {
  recipes: [],
};

export default RecipesShowCase;
