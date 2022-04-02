export function getMealsInProggress(recipeId) {
  const inProggressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let isInProggress;

  if (inProggressRecipes !== null) {
    if (inProggressRecipes.meals[recipeId]) {
      isInProggress = true;
    } else {
      isInProggress = false;
    }
  }
  return isInProggress;
}

export function getDrinksInProggress(recipeId) {
  const inProggressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let isInProggress;

  if (inProggressRecipes !== null) {
    if (inProggressRecipes.cocktails[recipeId]) {
      isInProggress = true;
    } else {
      isInProggress = false;
    }
  }
  return isInProggress;
}
