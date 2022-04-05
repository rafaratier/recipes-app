import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import RecipeContext from '../context/RecipeContext';

function DrinksRecipesShowCase(props) {
  const { recipes } = props;
  const RECIPES_LIMIT = 11;

  const { searchRecipes } = useContext(RecipeContext);

  const renderSearchRecipes = (drinks) => {
    if (!drinks) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (drinks.length === 1) {
      const adress = `/drinks/${drinks[0].idDrink}`;
      return <Redirect to={ adress } />;
    }
    if (drinks.length > 1) {
      return drinks.map((drink, index) => {
        const { strDrinkThumb, strDrink, idDrink } = drink;
        if (index <= RECIPES_LIMIT) {
          return (
            <RecipesCard
              key={ idDrink }
              index={ index }
              recipeThumbnail={ strDrinkThumb }
              recipeName={ strDrink }
              recipeId={ strDrink }
            />);
        }
        return false;
      });
    }
  };

  return (
    <div className="recipes-container">

      { renderSearchRecipes(searchRecipes.drinks) }

      {!searchRecipes.meals && recipes.map((recipe, index) => {
        if (index <= RECIPES_LIMIT) {
          return (
            <RecipesCard
              key={ index }
              index={ index }
              recipeId={ recipe.idDrink }
              recipeThumbnail={ recipe.strDrinkThumb }
              recipeName={ recipe.strDrink }
              recipeType="drinks"
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
