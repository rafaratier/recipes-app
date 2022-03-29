import React, { useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/RecipeContext';

function FoodInProgress() {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.meals.filter(({ idMeal }) => idMeal === id);
  console.log(recipe);
  const ingredients = [
    '',
    recipe[0].strIngredient1,
    recipe[0].strIngredient2,
    recipe[0].strIngredient3,
    recipe[0].strIngredient4,
    recipe[0].strIngredient5,
    recipe[0].strIngredient6,
    recipe[0].strIngredient7,
    recipe[0].strIngredient8,
    recipe[0].strIngredient9,
    recipe[0].strIngredient10,
    recipe[0].strIngredient11,
    recipe[0].strIngredient12,
    recipe[0].strIngredient13,
    recipe[0].strIngredient14,
    recipe[0].strIngredient15,
    recipe[0].strIngredient16,
    recipe[0].strIngredient17,
    recipe[0].strIngredient18,
    recipe[0].strIngredient19,
    recipe[0].strIngredient20,
  ];
  const measure = [
    '',
    recipe[0].strMeasure1,
    recipe[0].strMeasure2,
    recipe[0].strMeasure3,
    recipe[0].strMeasure4,
    recipe[0].strMeasure5,
    recipe[0].strMeasure6,
    recipe[0].strMeasure7,
    recipe[0].strMeasure8,
    recipe[0].strMeasure9,
    recipe[0].strMeasure10,
    recipe[0].strMeasure11,
    recipe[0].strMeasure12,
    recipe[0].strMeasure13,
    recipe[0].strMeasure14,
    recipe[0].strMeasure15,
    recipe[0].strMeasure16,
    recipe[0].strMeasure17,
    recipe[0].strMeasure18,
    recipe[0].strMeasure19,
    recipe[0].strMeasure20,
  ];

  return (
    <div className="in-progress-page">
      <h2 data-testid="recipe-title">{recipe[0].strMeal}</h2>
      <img
        src={ recipe[0].strMealThumb }
        alt={ `imagem de ${recipe[0].strMeal}` }
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
      <h5>
        { `Categoria: ${recipe[0].strCategory}` }
      </h5>
      <div>
        {ingredients.map((ingredient, index) => {
          if (ingredient) {
            return (
              <h7 data-testid={ `${index}-ingredient-step` }>
                { `${ingredient} - ${measure[index]}` }
              </h7>
            );
          }
          return false;
        })}
      </div>
      <p data-testid="instructions">
        {recipe[0].strInstructions}
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
