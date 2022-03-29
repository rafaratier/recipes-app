import React, { useState, useEffect, useContext } from 'react';
import {
  getFoodCategories,
  getAllFoodRecipes,
  getRecipesFromCategory,
} from '../helpers/fetchFoodRecipes';
import CategoriesButtons from '../components/CategoriesButtons';
import FoodRecipesShowCase from '../components/FoodRecipesShowCase';
import FooterMenu from '../components/FooterMenu';
import RecipeContext from '../context/RecipeContext';

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

  const { recipes, setRecipes } = useContext(RecipeContext);

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
    console.log(recipes);
  }, [selectedCategory]);

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
