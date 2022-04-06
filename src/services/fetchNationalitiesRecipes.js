export const getNationalities = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const result = request.json();
  return result;
};

export const getRecipesByNationality = async (nationality) => {
  const request = await
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
  const result = request.json();
  return result;
};
