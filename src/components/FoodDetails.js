import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFoodRecipe } from '../services/fetchFoodRecipes';
import Recommendations from './Recommendations';
import RecipeImgAndDetails from './RecipeImgAndTitleDetails';
import FavoriteAndShareButtons from './FavoriteAndShareButtons';
import RecipeIngredients from './RecipeIngredients';
import RecipeVideo from './RecipeVideo';
import getDoneRecipes from '../helpers/getDoneRecipes';
import { getMealsInProggress } from '../helpers/getRecipesInProggress';

function FoodDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  const [isDone, setDone] = useState();

  const [inProggress, setInProggress] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getFoodRecipe(id);
      setRecipe(result.meals);
    };
    fetchRecipe();
  }, [id]);

  useEffect(() => {
    if (recipe && recipe.length > 0) {
      setDone(getDoneRecipes(recipe[0].idMeal));

      setInProggress(getMealsInProggress(recipe[0].idMeal));
    }
  }, [recipe]);

  return (
    <div>

      <h1>DETALHES DA COMIDA</h1>

      {recipe && recipe.map((mealObj) => (
        <div key={ mealObj.idMeal }>
          <RecipeImgAndDetails recipe={ mealObj } />

          <FavoriteAndShareButtons recipe={ mealObj } />

          <RecipeIngredients recipe={ mealObj } />

          <RecipeVideo recipe={ mealObj } />
        </div>
      ))}

      <Recommendations suggestionType="drink" />

      { isDone ? '' : (
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          {inProggress ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}

    </div>
  );
}

export default FoodDetails;
