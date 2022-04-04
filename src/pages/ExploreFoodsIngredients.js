import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeProvider';
import RecipeContext from '../context/RecipeContext';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { getAllIngredients } from '../services/fetchFoodRecipes';

function ExploreFoodsIngredients() {
  const { setIngredient } = useRecipeContext(RecipeContext);
  const [listFoodIngredients, setListFoodIngredients] = useState([]);

  const MAX_INGREDIENTS = 12;

  // montar componente
  const getListFoodIngredients = () => {
    getAllIngredients()
      .then((response) => {
        setListFoodIngredients(response.meals);
      });
  };

  useEffect(() => { getListFoodIngredients(); }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <h1>Explore Foods By Ingredients</h1>

      {listFoodIngredients.slice(0, MAX_INGREDIENTS)
        .map(({ strIngredient: ingredientName }, index) => (
          <Link
            to="/foods"
            key={ index }
            onClick={ () => setIngredient(ingredientName) }
          >
            <div
              className="explore-ingredients-container"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={
                  `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`
                }
                alt={ `imagem do ingrediente ${ingredientName}` }
              />
              <p data-testid={ `${index}-card-name` }>{ingredientName}</p>
            </div>
          </Link>
        ))}

      <FooterMenu />
    </div>
  );
}

export default ExploreFoodsIngredients;
