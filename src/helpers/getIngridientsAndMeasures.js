function getIngridientsAndMeasures(recipeObj) {
  const ingredients = [];

  const measures = [];

  const ingredientsWithMeasures = [];

  Object.entries(recipeObj).forEach((item) => {
    if (item[0].match(/Ingredient/g) && item[1] !== '') {
      ingredients.push(item[1]);
    }
  });

  Object.entries(recipeObj).forEach((item) => {
    if (item[0].match(/Measure/g) && item[1] !== '') {
      measures.push(item[1]);
    }
  });

  ingredients.forEach((element, index) => {
    ingredientsWithMeasures.push([element, measures[index]]);
  });

  return ingredientsWithMeasures;
}

export default getIngridientsAndMeasures;
