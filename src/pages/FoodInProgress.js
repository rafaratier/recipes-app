import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeContext from '../context/RecipeContext';
import { getRecipeFromId } from '../helpers/fetchFoodRecipes';

function FoodInProgress() {
  const { INITIAL_DATA, INITIAL_CHECKBOX } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState(INITIAL_DATA);
  const [checkboxes, setCheckboxes] = useState(INITIAL_CHECKBOX);
  const [finishIsAble, setFinishIsAble] = useState(true);
  const [checkCount, setCheckCount] = useState(1);
  const { id } = useParams();
  const recipeInStorage = localStorage.getItem('inProgressRecipes');
  const objRecipeInStorage = JSON.parse(recipeInStorage);
  const ingredientsInUse = [];
  const ingredients = [
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

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];
      recipesArray = await getRecipeFromId(id);
      setRecipe(recipesArray);
      setFinishIsAble(true);
    };
    getRecipes();
  }, [id]);

  const onAddingIngredient = (index) => {
    const howManyCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkIngredients = checkboxes;
    const newObj = {
      cocktails: {},
      meals: {},
    };

    const recipeInStorage2 = localStorage.getItem('inProgressRecipes');
    const objRecipeInStorage2 = JSON.parse(recipeInStorage2);
    localStorage.setItem('teste', 'testando');

    ingredientsInUse.push(ingredients[index]);
    console.log(objRecipeInStorage);
    if (objRecipeInStorage === null) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    } else {
      console.log(objRecipeInStorage2);
      console.log(ingredientsInUse);
    }
    console.log(checkIngredients[index]);
    checkIngredients[index] = !checkIngredients[index];
    console.log(checkIngredients[index]);
    setCheckboxes(checkIngredients);
    if (checkIngredients[index]) {
      setCheckCount(checkCount + 1);
      if (checkCount === howManyCheckboxes.length) {
        setFinishIsAble(false);
      }
    } else {
      setCheckCount(checkCount - 1);
      if (checkCount !== howManyCheckboxes.length) {
        setFinishIsAble(true);
      }
    }
    console.log(checkCount);
    console.log(howManyCheckboxes.length);
  };

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
      <table>
        <tbody>
          { ingredients.map((ingredient, index) => {
            if (ingredient) {
              return (
                <tr key={ index + 1 }>
                  <td>{index + 1}</td>
                  <td>
                    <div className="ingredients-with-checkbox">
                      <label
                        className="checkbox-checked"
                        htmlFor={ ingredient }
                        data-testid={ `${index}-ingredient-step` }
                      >
                        <input
                          type="checkbox"
                          value={ ingredient }
                          className={ ingredient }
                          onChange={ () => onAddingIngredient(index) }
                          // checked={ objRecipeInStorage.meals[id].some(ingredient) }
                        />
                        { `${ingredient} - ${measure[index]}` }
                      </label>
                    </div>
                  </td>
                </tr>
              );
            }
            return false;
          })}

        </tbody>
      </table>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ finishIsAble }
      >
        Finalizar Receita
      </button>
      <p data-testid="instructions">
        {recipe.meals[0].strInstructions}
      </p>
    </div>
  );
}

export default FoodInProgress;
