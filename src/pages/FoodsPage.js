import React, { useState, useEffect } from 'react';
import {
  getFoodCategories,
  getAllFoodRecipes,
  getRecipesFromCategory,
} from '../helpers/fetchFoodRecipes';
import CategoriesButtons from '../components/CategoriesButtons';
import RecipesShowCase from '../components/RecipesShowCase';

function FoodsPage() {
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getFoodCategories();
      setFoodCategories(result.meals);
    };
    fetchCategories();
  }, []);

  const [selectedCategory, setCategory] = useState('all');

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];
      if (selectedCategory === 'all') {
        recipesArray = await getAllFoodRecipes();
      } else {
        recipesArray = await getRecipesFromCategory(selectedCategory);
      }
      setRecipes(recipesArray);
    };
    getRecipes();
  }, [selectedCategory]);

  return (
    <div>
      <h1>FOODS PAGE</h1>
      <CategoriesButtons
        categories={ foodCategories }
        selectedCategory={ selectedCategory }
        getSelectedCategory={ setCategory }
      />
      <RecipesShowCase recipes={ recipes.meals } />
    </div>
  );
}

export default FoodsPage;
