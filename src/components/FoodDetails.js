import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFoodRecipe } from '../helpers/fetchFoodRecipes';
import Recommendations from './Recommendations';
import RecipeImgAndDetails from './RecipeImgAndTitleDetails';
import FavoriteAndShareButtons from './FavoriteAndShareButtons';
import RecipeIngredients from './RecipeIngredients';
import RecipeVideo from './RecipeVideo';

function FoodDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getFoodRecipe(id);
      setRecipe(result.meals);
    };
    fetchRecipe();
  }, [id]);

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

    </div>
  );
}

export default FoodDetails;
