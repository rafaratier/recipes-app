import React from 'react';
import PropTypes from 'prop-types';
import RecipesCard from './RecipesCard';

function DrinksRecipesShowCase(props) {
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
              recipeId={ recipe.idDrink }
              recipeThumbnail={ recipe.strDrinkThumb }
              recipeName={ recipe.strDrink }
            />
          );
        }
        return false;
      })}
    </div>
  );
}

DrinksRecipesShowCase.propTypes = {
  recipes: PropTypes.instanceOf(Array),
};

DrinksRecipesShowCase.defaultProps = {
  recipes: [],
};

export default DrinksRecipesShowCase;
