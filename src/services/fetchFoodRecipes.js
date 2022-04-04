export const getAllFoodRecipes = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const result = request.json();
  return result;
};

export const getRecipesFromCategory = async (category) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const result = request.json();
  return result;
};

export const getFoodCategories = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const result = await request.json();
  return result;
};

<<<<<<< HEAD:src/services/fetchFoodRecipes.js
export const getFoodRecipe = async (recipeId) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
=======
export const getRandomFoodRecipeDetails = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const result = await request.json();
  return result;
};

export const getAllIngredients = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const result = await request.json();
  return result;
};

export const getFoodsByIngredient = async (ingredientName) => {
  const request = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`,
  );
>>>>>>> da9fd4d9d35e12c32f02f08854e32153dd8c72b9:src/helpers/fetchFoodRecipes.js
  const result = await request.json();
  return result;
};
