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

export const getRandomDrinkRecipeDetails = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const result = await request.json();
  return result;
};

export const getDrinkRecipeByIngredient = async () => {
  const request = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const result = request.json();

  return request.ok ? Promise.resolve(result) : Promise.reject(result);
};
