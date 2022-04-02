import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import { getDrinkRecipeByIngredient } from '../helpers/fetchDrinksRecipes';

function ExploreDrinksIngredients() {
  const MAX_INGREDIENTS = 12;
  const [listDrinkIngredients, setListDrinkIngredients] = useState([]);

  const getListDrinkIngredients = () => {
    getDrinkRecipeByIngredient()
      .then((response) => {
        console.log(response);
        setListDrinkIngredients(response.drinks);
      });
  };

  useEffect(() => { getListDrinkIngredients(); }, []);

  const handleClick = () => {

  };

  return (
    <div>
      <h1>Explore Drinks By Ingredients</h1>

      {/* o card terá um Link para redirecionar + map */}
      {listDrinkIngredients.slice(0, MAX_INGREDIENTS)
        .map(({ strDrink: ingredient }, index) => (
          <Link key={ index } to="/drinks">
            <div
              className="explore-ingredients-container"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
                alt={ `imagem do ingrediente ${ingredient}` }
              />
              <p data-testid={ `${index}-card-name` }>{ingredient}</p>
            </div>
          </Link>
        ))}

      <FooterMenu />
    </div>
  );
}

export default ExploreDrinksIngredients;
