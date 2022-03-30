import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';

function ExploreDrinks() {
  const history = useHistory();

  return (
    <div>
      <h1>pagina de explorar bebida</h1>

      <div>
        <button
          type="submit"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient

        </button>
        <button
          type="submit"
          data-testid="explore-surprise"
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
