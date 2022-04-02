import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
// import RecipeContext from '../context/RecipeContext';
import { getFoodRecipeByIngredient } from '../helpers/fetchFoodRecipes';

function ExploreFoodsIngredients() {
  const MAX_INGREDIENTS = 12; // deve mostrar apenas 12 ngredientes
  // console.log(MAX_INGREDIENTS);
  const [listFoodIngredients, setListFoodIngredients] = useState([]);

  // montar componente
  const getListFoodIngredients = () => {
    getFoodRecipeByIngredient()
      .then((response) => {
        setListFoodIngredients(response.meals);
        console.log(response.meals[0].strIngredient);
      });
  };

  useEffect(() => { getListFoodIngredients(); }, []);

  return (
    <div>
      <h1>Explore Foods By Ingredients</h1>

      {/* o card terá um Link para redirecionar + map
      redirecionar para pagina de comidas que tem o ingrediente
      */}
      {listFoodIngredients.slice(0, MAX_INGREDIENTS)
        .map(({ strIngredient: ingredient }, index) => (
          <Link to="/foods" key={ index }>
            <div
              className="explore-ingredients-container"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={
                  `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`
                }
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

export default ExploreFoodsIngredients;
