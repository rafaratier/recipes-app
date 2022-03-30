import React, { useState, useEffect } from 'react';
import {
  getFoodCategories,
  getAllFoodRecipes,
  getRecipesFromCategory,
} from '../helpers/fetchFoodRecipes';
import CategoriesButtons from '../components/CategoriesButtons';
import FoodRecipesShowCase from '../components/FoodRecipesShowCase';
import Header from '../components/Header';

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
      <Header title="Foods" />
      <h1>FOODS PAGE</h1>
      <CategoriesButtons
        categories={ foodCategories }
        selectedCategory={ selectedCategory }
        getSelectedCategory={ setCategory }
      />
      <FoodRecipesShowCase recipes={ recipes.meals } />
    </div>
  );
}

export default FoodsPage;
