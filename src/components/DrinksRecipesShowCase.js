import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesCard from './RecipesCard';
import RecipeContext from '../context/RecipeContext';

function DrinksRecipesShowCase(props) {
  const { recipes } = props;
  const RECIPES_LIMIT = 11;

  const { searchRecipes } = useContext(RecipeContext);

  return (
    <div className="recipes-container">
      {
        searchRecipes.drinks.length > 0 ? searchRecipes.drinks.map((meal) => {
          const { strDrinkThumb, strDrink, idDrink } = meal;
          return (
            <RecipesCard
              key={ idDrink }
              index={ idDrink }
              recipeThumbnail={ strDrinkThumb }
              recipeName={ strDrink }
              recipeId={ strDrink }
            />);
        }) : alert('deu ruim')
      }

      {searchRecipes.drinks.length === 0 && recipes && recipes.map((recipe, index) => {
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
