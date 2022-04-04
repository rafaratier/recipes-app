import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getDrinkRecipe } from '../services/fetchDrinksRecipes';
import Recommendations from './Recommendations';
import RecipeImgAndDetails from './RecipeImgAndTitleDetails';
import FavoriteAndShareButtons from './FavoriteAndShareButtons';
import RecipeIngredients from './RecipeIngredients';
import getDoneRecipes from '../helpers/getDoneRecipes';
import { getDrinksInProgress } from '../helpers/getRecipesInProgress';

function DrinksDetails() {
  const { id } = useParams();

  const history = useHistory();

  const [recipe, setRecipe] = useState();

  const [isDone, setDone] = useState();

  const [inProgress, setInProgress] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getDrinkRecipe(id);
      setRecipe(result.drinks);
    };
    fetchRecipe();
  }, [id]);

  useEffect(() => {
    if (recipe && recipe.length > 0) {
      setDone(getDoneRecipes(recipe[0].idDrink));

      setInProgress(getDrinksInProgress(recipe[0].idDrink));
    }
  }, [recipe]);

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

      { isDone ? '' : (
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`${id}/in-progress`) }
        >
          {inProgress ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}

    </div>
  );
}

export default DrinksDetails;
