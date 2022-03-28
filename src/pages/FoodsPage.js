import React, { useState, useEffect } from 'react';
import { getFoodCategories } from '../helpers/fetchFoodRecipes';
import CategoriesButtons from '../components/CategoriesButtons';

function FoodsPage() {
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getFoodCategories();
      setFoodCategories(result.meals);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>FOODS PAGE</h1>
      <CategoriesButtons categories={ foodCategories } />
    </div>
  );
}

export default FoodsPage;
