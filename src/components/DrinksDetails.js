import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkRecipe } from '../helpers/fetchDrinksRecipes';
import Recommendations from './Recommendations';
import RecipeImgAndDetails from './RecipeImgAndTitleDetails';
import FavoriteAndShareButtons from './FavoriteAndShareButtons';
import RecipeIngredients from './RecipeIngredients';

function DrinksDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getDrinkRecipe(id);
      setRecipe(result.drinks);
    };
    fetchRecipe();
  }, [id]);

  return (
    <div>

      <h1>DETALHES DA BEBIDA</h1>

      {recipe && recipe.map((drinkObj) => (
        <div key={ drinkObj.idDrink }>
          <RecipeImgAndDetails recipe={ drinkObj } />

          <FavoriteAndShareButtons recipe={ drinkObj } />

          <RecipeIngredients recipe={ drinkObj } />

        </div>
      ))}

      <Recommendations suggestionType="food" />

    </div>
  );
}

export default DrinksDetails;
