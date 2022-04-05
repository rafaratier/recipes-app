import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import { getRecipeFromId } from '../helpers/fetchFoodRecipes';
import FavoriteAndShareButtons from '../components/FavoriteAndShareButtons';

function FoodInProgress() {
  const history = useHistory();
  const { INITIAL_DATA, processInStorage } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState(INITIAL_DATA);
  const [finishIsAble, setFinishIsAble] = useState(true);
  const { id } = useParams();
  const [ingredientsInUse, setIngredientsInUse] = useState([]);
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

  useEffect(() => {
    const objRecipeInStorage = processInStorage();

    if (objRecipeInStorage !== null && objRecipeInStorage.meals[id] !== null) {
      setIngredientsInUse(objRecipeInStorage.meals[id]);
    }
    const howManyCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    if (ingredientsInUse.length === howManyCheckboxes.length) {
      setFinishIsAble(false);
    } else {
      setFinishIsAble(true);
    }
  }, []);

  useEffect(() => {
    const objRecipeInStorage = processInStorage();
    const howManyCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    if (objRecipeInStorage !== null) {
      objRecipeInStorage.meals[id] = ingredientsInUse;
      localStorage.setItem('inProgressRecipes', JSON.stringify(objRecipeInStorage));
    }
    if (ingredientsInUse.length === howManyCheckboxes.length) {
      setFinishIsAble(false);
    } else {
      setFinishIsAble(true);
    }
  }, [ingredientsInUse]);

  const onAddingIngredient = (index) => {
    const newObj = {
      cocktails: {},
      meals: {},
    };
    const objRecipeInStorage = processInStorage();
    if (objRecipeInStorage === null) {
      newObj.meals[id] = [ingredients[index]];
      setIngredientsInUse(newObj.meals[id]);
      localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    } else if (objRecipeInStorage.meals[id]) {
      if (ingredientsInUse.some((e) => e === ingredients[index])) {
        setIngredientsInUse(ingredientsInUse.filter((n) => n !== ingredients[index]));
      } else {
        setIngredientsInUse([...ingredientsInUse, ingredients[index]]);
      }
    } else {
      setIngredientsInUse([ingredients[index]]);
      newObj.meals[id] = [ingredientsInUse];
      localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    }
  };

  const doneRecipe = () => {
    const dt = new Date().toLocaleDateString();
    const objRecipeInStorage = processInStorage();
    objRecipeInStorage.meals[id] = [];
    localStorage.setItem('inProgressRecipes', JSON.stringify(objRecipeInStorage));
    const doneObj = {
      id: recipe.meals[0].idMeal,
      type: 'food',
      nationality: recipe.meals[0].strArea,
      category: recipe.meals[0].strCategory,
      alcoholicOrNot: 'food',
      name: recipe.meals[0].strMeal,
      image: recipe.meals[0].strMealThumb,
      doneDate: dt,
      tags: recipe.meals[0].strTags.split(', '),
    };

    const doneInStorage = localStorage.getItem('doneRecipes');
    let doneRecipes = JSON.parse(doneInStorage);

    if (doneRecipes === null) {
      doneRecipes = [doneObj];
      localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    } else {
      doneRecipes.push(doneObj);
      localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    }
    history.push('/done-recipes');
  };

  return (
    <div className="in-progress-page">
      <h2 data-testid="recipe-title">{recipe.meals[0].strMeal}</h2>
      <img
        src={ recipe.meals[0].strMealThumb }
        alt={ `imagem de ${recipe.meals[0].strMeal}` }
        data-testid="recipe-photo"
      />
      <FavoriteAndShareButtons recipe={ recipe.meals[0] } />
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
                          className="ingredient-checkbox"
                          data-testid={ `${index}-horizontal-share-btn` }
                          onChange={ () => onAddingIngredient(index) }
                          checked={ ingredientsInUse.some((e) => e === ingredient) }
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
        onClick={ doneRecipe }
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
