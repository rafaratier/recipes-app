import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import { getRandomFoodRecipeDetails } from '../helpers/fetchFoodRecipes';

function ExploreFoods() {
  const history = useHistory();

  const handleClick = async () => {
    const response = await getRandomFoodRecipeDetails();
    const { idMeal } = response.meals[0];
    console.log(response.meals);
    console.log(idMeal);
    history.push(`/foods/${idMeal}`);
  };

  return (
    <div>
      <h1>Explore Foods</h1>

      <div>
        <button
          type="submit"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient

        </button>
        <button
          type="submit"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality

        </button>
        <button
          type="submit"
          data-testid="explore-surprise"
          onClick={ handleClick }
        >
          Surprise me!

        </button>
      </div>
      <FooterMenu />
    </div>
  );
}

export default ExploreFoods;

/*
Ao clicar no botão "Surprise me!" da tela de explorar comidas a rota muda para a
página de detalhes de uma comida aleatória obtida através do endpoint https://www.themealdb.com/api/json/v1/1/random.php;
*/
