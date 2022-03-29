import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

function FoodsPage() {
  const { recipes } = useContext(RecipeContext);
  console.log(recipes.meals);
  return (
    <>
      <Header title="Foods" />
      {
        recipes.meals ? recipes.meals.map((meal) => {
          const { strMealThumb, strMeal, idMeal } = meal;

          return (<RecipeCard
            key={ idMeal }
            index={ idMeal }
            recipeThumbnail={ strMealThumb }
            recipeName={ strMeal }
            recipeId={ strMeal }
          />);
        }) : alert('DEU RUIM')
      }
    </>
  );
}

export default FoodsPage;
