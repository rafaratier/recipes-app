import React, { useState, useEffect } from 'react';
import {
  getAllDrinksRecipes,
  getDrinksCategories,
  getDrinksFromCategory,
} from '../services/fetchDrinksRecipes';
import CategoriesButtons from '../components/CategoriesButtons';
import DrinksRecipesShowCase from '../components/DrinksRecipesShowCase';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

function DrinksPage() {
  const [drinksCategories, setdrinksCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getDrinksCategories();
      setdrinksCategories(result.drinks);
    };
    fetchCategories();
  }, []);

  const [selectedCategory, setCategory] = useState('all');

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let recipesArray = [];
      if (selectedCategory === 'all') {
        recipesArray = await getAllDrinksRecipes();
      } else {
        recipesArray = await getDrinksFromCategory(selectedCategory);
      }
      setRecipes(recipesArray);
    };
    getRecipes();
  }, [selectedCategory]);

  return (
    <div>
      <Header title="Drinks" />

      <h1>DRINKS PAGE</h1>
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
