import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeProvider';
import RecipeContext from '../context/RecipeContext';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { getAllIngredients } from '../services/fetchDrinksRecipes';

function ExploreDrinksIngredients() {
  const { setIngredient } = useRecipeContext(RecipeContext);
  const [listDrinkIngredients, setListDrinkIngredients] = useState([]);

  const MAX_INGREDIENTS = 12;

  const getListDrinkIngredients = () => {
    getAllIngredients()
      .then((response) => {
        setListDrinkIngredients(response.drinks);
      });
  };

  useEffect(() => { getListDrinkIngredients(); }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <h1>Explore Drinks By Ingredients</h1>

      {listDrinkIngredients.slice(0, MAX_INGREDIENTS)
        .map(({ strIngredient1: ingredientName }, index) => (
          <Link
            key={ index }
            to="/drinks"
            onClick={ () => setIngredient(ingredientName) }
          >
            <div
              className="explore-ingredients-container"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png` }
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

export default ExploreDrinksIngredients;
