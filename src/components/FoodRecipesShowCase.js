import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import RecipeContext from '../context/RecipeContext';

function FoodRecipesShowCase(props) {
  const { recipes } = props;
  const RECIPES_LIMIT = 11;

  const { searchRecipes } = useContext(RecipeContext);

  const renderSearchRecipes = (meals) => {
    if (!meals) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (meals.length === 1) {
      const adress = `/foods/${meals[0].idMeal}`;
      return <Redirect to={ adress } />;
    }
    if (meals.length > 1) {
      return meals.map((meal, index) => {
        const { strMealThumb, strMeal, idMeal } = meal;
        if (index <= RECIPES_LIMIT) {
          return (
            <RecipesCard
              key={ idMeal }
              index={ index }
              recipeThumbnail={ strMealThumb }
              recipeName={ strMeal }
              recipeId={ idMeal }
              searchType="card"
              recipeType="foods"
              cardType="recipe"
            />);
        }
        return false;
      });
    }
    return recipes.map((recipe, index) => {
      if (index <= RECIPES_LIMIT) {
        return (
          <RecipesCard
            key={ index }
            index={ index }
            recipeId={ recipe.idMeal }
            recipeThumbnail={ recipe.strMealThumb }
            recipeName={ recipe.strMeal }
            recipeType="foods"
            cardType="recipe"
            searchType="card"
          />
        );
      }
      return false;
    });
  };
  return (
    <div className="recipes-container">
      { renderSearchRecipes(searchRecipes.meals) }

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
