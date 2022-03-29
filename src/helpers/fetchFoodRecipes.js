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
