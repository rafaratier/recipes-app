import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import { getDrinkRecipeFromId } from '../helpers/fetchDrinksRecipes';
import FavoriteAndShareButtons from '../components/FavoriteAndShareButtons';

function DrinkInProgress() {
  const history = useHistory();
  const { INITIAL_DRINK_DATA, processInStorage } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState(INITIAL_DRINK_DATA);
  const [finishIsAble, setFinishIsAble] = useState(true);
  const { id } = useParams();
  const [ingredientsInUse, setIngredientsInUse] = useState([]);
  const ingredients = [
    recipe.drinks[0].strIngredient1,
    recipe.drinks[0].strIngredient2,
    recipe.drinks[0].strIngredient3,
    recipe.drinks[0].strIngredient4,
    recipe.drinks[0].strIngredient5,
    recipe.drinks[0].strIngredient6,
    recipe.drinks[0].strIngredient7,
    recipe.drinks[0].strIngredient8,
    recipe.drinks[0].strIngredient9,
    recipe.drinks[0].strIngredient10,
    recipe.drinks[0].strIngredient11,
    recipe.drinks[0].strIngredient12,
    recipe.drinks[0].strIngredient13,
    recipe.drinks[0].strIngredient14,
    recipe.drinks[0].strIngredient15,
  ];

  const measure = [
    recipe.drinks[0].strMeasure1,
    recipe.drinks[0].strMeasure2,
    recipe.drinks[0].strMeasure3,
    recipe.drinks[0].strMeasure4,
    recipe.drinks[0].strMeasure5,
    recipe.drinks[0].strMeasure6,
    recipe.drinks[0].strMeasure7,
    recipe.drinks[0].strMeasure8,
    recipe.drinks[0].strMeasure9,
    recipe.drinks[0].strMeasure10,
    recipe.drinks[0].strMeasure11,
    recipe.drinks[0].strMeasure12,
    recipe.drinks[0].strMeasure13,
    recipe.drinks[0].strMeasure14,
    recipe.drinks[0].strMeasure15,
  ];

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];
      recipesArray = await getDrinkRecipeFromId(id);
      setRecipe(recipesArray);
      setFinishIsAble(true);
    };
    getRecipes();
  }, [id]);

  useEffect(() => {
    const objRecipeInStorage = processInStorage();
    if (objRecipeInStorage !== null && objRecipeInStorage.cocktails[id] !== null) {
      setIngredientsInUse(objRecipeInStorage.cocktails[id]);
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
      objRecipeInStorage.cocktails[id] = ingredientsInUse;
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
      newObj.cocktails[id] = [ingredients[index]];
      setIngredientsInUse(newObj.cocktails[id]);
      localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    } else if (objRecipeInStorage.cocktails[id]) {
      if (ingredientsInUse.some((e) => e === ingredients[index])) {
        setIngredientsInUse(ingredientsInUse.filter((n) => n !== ingredients[index]));
      } else {
        setIngredientsInUse([...ingredientsInUse, ingredients[index]]);
      }
    } else {
      setIngredientsInUse([ingredients[index]]);
      newObj.cocktails[id] = [ingredientsInUse];
      localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    }
  };

  return (
    <div className="in-progress-page">
      <h2 data-testid="recipe-title">{recipe.drinks[0].strDrink}</h2>
      <img
        src={ recipe.drinks[0].strDrinkThumb }
        alt={ `imagem de ${recipe.drinks[0].strDrink}` }
        data-testid="recipe-photo"
      />
      <FavoriteAndShareButtons recipe={ recipe } />
      <h5
        data-testid="recipe-category"
      >
        { `Categoria: ${recipe.drinks[0].strCategory}` }
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
        onClick={ () => history.push('/done-recipes') }
      >
        Finalizar Receita
      </button>
      <p data-testid="instructions">
        {recipe.drinks[0].strInstructions}
      </p>
    </div>
  );
}

export default DrinkInProgress;
