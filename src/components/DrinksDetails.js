import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkRecipe } from '../helpers/fetchDrinksRecipes';
import RecipeDetails from './RecipeDetails';
import Recommendations from './Recommendations';

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
        <RecipeDetails
          key={ drinkObj.strDrink }
          recipe={ drinkObj }
        />
      ))}

      <Recommendations suggestionType="food" />
    </div>
  );
}

export default DrinksDetails;
