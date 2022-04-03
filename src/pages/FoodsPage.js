import React, { useState, useEffect } from 'react';
import { useRecipeContext } from '../context/RecipeProvider';
import RecipeContext from '../context/RecipeContext';
import {
  getFoodCategories,
  getAllFoodRecipes,
  getRecipesFromCategory,
  getFoodsByIngredient,
} from '../helpers/fetchFoodRecipes';
import CategoriesButtons from '../components/CategoriesButtons';
import FoodRecipesShowCase from '../components/FoodRecipesShowCase';
import FooterMenu from '../components/FooterMenu';

function FoodsPage() {
  const {
    recipes,
    setRecipes,
    ingredient,
  } = useRecipeContext(RecipeContext);
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getFoodCategories();
      setFoodCategories(result.meals);
    };
    fetchCategories();
  }, []);

  const [selectedCategory, setCategory] = useState('all');

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];

      if (ingredient) {
        recipesArray = await getFoodsByIngredient(ingredient);
      } else if (selectedCategory === 'all') {
        recipesArray = await getAllFoodRecipes();
      } else {
        recipesArray = await getRecipesFromCategory(selectedCategory);
      }
      setRecipes(recipesArray);
    };
    getRecipes();
  }, [selectedCategory, setRecipes, ingredient]);

  return (
    <div>
      <h1>FOODS PAGE</h1>
      <CategoriesButtons
        categories={ foodCategories }
        selectedCategory={ selectedCategory }
        getSelectedCategory={ setCategory }
      />
      <FoodRecipesShowCase recipes={ recipes.meals } />
      <FooterMenu />
    </div>
  );
}

export default FoodsPage;
