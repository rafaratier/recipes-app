import React, { useState, useEffect } from 'react';
import { useRecipeContext } from '../context/RecipeProvider';
import RecipeContext from '../context/RecipeContext';
import { getAllDrinksRecipes,
  getDrinksCategories,
  getDrinksFromCategory,
  getDrinksByIngredient,
} from '../services/fetchDrinksRecipes';
import CategoriesButtons from '../components/CategoriesButtons';
import DrinksRecipesShowCase from '../components/DrinksRecipesShowCase';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

function DrinksPage() {
  const {
    recipes,
    setRecipesMain,
    ingredient,
  } = useRecipeContext(RecipeContext);
  const [drinksCategories, setdrinksCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getDrinksCategories();
      setdrinksCategories(result.drinks);
    };
    fetchCategories();
  }, []);

  const [selectedCategory, setCategory] = useState('all');

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];

      if (ingredient) {
        recipesArray = await getDrinksByIngredient(ingredient);
      } else if (selectedCategory === 'all') {
        recipesArray = await getAllDrinksRecipes();
      } else {
        recipesArray = await getDrinksFromCategory(selectedCategory);
      }
      setRecipesMain(recipesArray);
    };
    getRecipes();
  }, [selectedCategory, setRecipesMain, ingredient]);

  return (
    <div>
      <Header title="Drinks" />

      <CategoriesButtons
        categories={ drinksCategories }
        selectedCategory={ selectedCategory }
        getSelectedCategory={ setCategory }
      />
      <DrinksRecipesShowCase recipes={ recipes.drinks } />
      <FooterMenu />
    </div>
  );
}

export default DrinksPage;
