import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../helpers/fetchFoodRecipes';

function FoodDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getRecipe(id);
      setRecipe(result);
    };
    fetchRecipe();
  }, [id]);

  console.log(recipe);

  return (
    <div>
      <h1>DETALHES DA COMIDA</h1>
    </div>
  );
}

export default FoodDetails;
