export function getMealsInProgress(recipeId) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let isInProgress;

  if (inProgressRecipes !== null) {
    if (inProgressRecipes.meals[recipeId]) {
      isInProgress = true;
    } else {
      isInProgress = false;
    }
  }
  return isInProgress;
}

export function getDrinksInProgress(recipeId) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let isInProgress;

  if (inProgressRecipes !== null) {
    if (inProgressRecipes.cocktails[recipeId]) {
      isInProgress = true;
    } else {
      isInProgress = false;
    }
  }
  return isInProgress;
}
