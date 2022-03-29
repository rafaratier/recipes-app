import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../helpers/fetchFoodRecipes';
import RecipeDetails from './RecipeDetails';

function FoodDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getRecipe(id);
      setRecipe(result.meals);
    };
    fetchRecipe();
  }, [id]);

  console.log(recipe);

  return (
    <div>
      <h1>DETALHES DA COMIDA</h1>
      {recipe && recipe.map((mealObj) => (
        <RecipeDetails
          key={ mealObj.strMeal }
          recipe={ mealObj }
        />
      ))}
    </div>
  );
}

export default FoodDetails;
