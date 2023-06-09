export const getAllDrinksRecipes = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const result = request.json();
  return result;
};

export const getDrinksFromCategory = async (category) => {
  const request = await
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const result = request.json();
  return result;
};

export const getDrinksCategories = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const result = await request.json();
  return result;
};

export const getDrinkRecipeFromId = async (ids) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ids}`);
  const result = request.json();
  return result;
};
