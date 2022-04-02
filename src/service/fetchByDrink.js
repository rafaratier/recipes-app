export const fetchDrinkByIngredient = async (ingredient) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();

  return response.drinks;
};

export const fetchDrinkByName = async (food) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${food}`);
  const response = await request.json();

  return response.drinks;
};

export const fetchDrinkByFirstLetter = async (letter) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  const response = await request.json();

  return response.drinks;
};
