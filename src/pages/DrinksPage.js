import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

function DrinksPage() {
  const { recipes } = useContext(RecipeContext);
  return (
    <>
      <Header title="Drinks" />
      {
        recipes.meals ? recipes.drinks.map((meal) => {
          const { strDrinkThumb, strDrink, idDrink } = meal;

          return (<RecipeCard
            key={ idDrink }
            index={ idDrink }
            recipeThumbnail={ strDrinkThumb }
            recipeName={ strDrink }
            recipeId={ strDrink }
          />);
        }) : alert('DEU RUIM')
      }
    </>
  );
}

export default DrinksPage;
