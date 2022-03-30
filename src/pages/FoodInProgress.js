import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getRecipeFromId } from '../helpers/fetchFoodRecipes';
import INITIAL_DATA from '../helpers/emptyObj';

function FoodInProgress() {
  const [recipe, setRecipe] = useState(INITIAL_DATA);
  const { id } = useParams();

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];
      recipesArray = await getRecipeFromId(id);
      setRecipe(recipesArray);
    };
    getRecipes();
  }, []);

  const ingredients = [
    '',
    recipe.meals[0].strIngredient1,
    recipe.meals[0].strIngredient2,
    recipe.meals[0].strIngredient3,
    recipe.meals[0].strIngredient4,
    recipe.meals[0].strIngredient5,
    recipe.meals[0].strIngredient6,
    recipe.meals[0].strIngredient7,
    recipe.meals[0].strIngredient8,
    recipe.meals[0].strIngredient9,
    recipe.meals[0].strIngredient10,
    recipe.meals[0].strIngredient11,
    recipe.meals[0].strIngredient12,
    recipe.meals[0].strIngredient13,
    recipe.meals[0].strIngredient14,
    recipe.meals[0].strIngredient15,
    recipe.meals[0].strIngredient16,
    recipe.meals[0].strIngredient17,
    recipe.meals[0].strIngredient18,
    recipe.meals[0].strIngredient19,
    recipe.meals[0].strIngredient20,
  ];
  const measure = [
    '',
    recipe.meals[0].strMeasure1,
    recipe.meals[0].strMeasure2,
    recipe.meals[0].strMeasure3,
    recipe.meals[0].strMeasure4,
    recipe.meals[0].strMeasure5,
    recipe.meals[0].strMeasure6,
    recipe.meals[0].strMeasure7,
    recipe.meals[0].strMeasure8,
    recipe.meals[0].strMeasure9,
    recipe.meals[0].strMeasure10,
    recipe.meals[0].strMeasure11,
    recipe.meals[0].strMeasure12,
    recipe.meals[0].strMeasure13,
    recipe.meals[0].strMeasure14,
    recipe.meals[0].strMeasure15,
    recipe.meals[0].strMeasure16,
    recipe.meals[0].strMeasure17,
    recipe.meals[0].strMeasure18,
    recipe.meals[0].strMeasure19,
    recipe.meals[0].strMeasure20,
  ];

  return (
    <div className="in-progress-page">
      <h2 data-testid="recipe-title">{recipe.meals[0].strMeal}</h2>
      <img
        src={ recipe.meals[0].strMealThumb }
        alt={ `imagem de ${recipe.meals[0].strMeal}` }
        data-testid="recipe-photo"
      />
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>
      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>
      <h5
        data-testid="recipe-category"
      >
        { `Categoria: ${recipe.meals[0].strCategory}` }
      </h5>
      <div>
        {ingredients.map((ingredient, index) => {
          if (ingredient) {
            return (
              <p data-testid={ `${index}-ingredient-step` }>
                { `${ingredient} - ${measure[index]}` }
              </p>
            );
          }
          return false;
        })}
      </div>
      <p data-testid="instructions">
        {recipe.meals[0].strInstructions}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default FoodInProgress;
