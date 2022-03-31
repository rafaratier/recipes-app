import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import { getRandomDrinkRecipeDetails } from '../helpers/fetchDrinksRecipes';

function ExploreDrinks() {
  const history = useHistory();

  const handleClick = async () => {
    const response = await getRandomDrinkRecipeDetails();
    const { idDrink } = response.drinks[0];
    console.log(idDrink);
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <div>
      <h1>Explore New Drinks</h1>

      <div>
        <button
          type="submit"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient

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

export default ExploreDrinks;

/*
Ao clicar no botão "Surprise me!" da tela de explorar bebidas a rota muda para a
página de detalhes de uma bebida aleatória obtida através do endpoint https://www.thecocktaildb.com/api/json/v1/1/random.php.
*/
