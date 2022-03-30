import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';

function ExploreFoods() {
  const history = useHistory();

  return (
    <div>
      <h1>pagina de explorar comida</h1>

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
          onClick={ () => history.push('/explore/foods') }
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
