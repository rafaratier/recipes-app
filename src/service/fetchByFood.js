export const fetchByIngredient = async (ingredient) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const response = await request.json();

  return response.meals;
};

export const fetchByName = async (food) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
  const response = await request.json();

  return response.meals;
};

export const fetchByFirstLetter = async (letter) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const response = await request.json();

  return response.meals;
};
