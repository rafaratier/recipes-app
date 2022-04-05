function getDoneRecipes(recipeId) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  let isRecipeDone = false;

  if (doneRecipes !== null) {
    isRecipeDone = doneRecipes
      .some((doneRecipe) => doneRecipe.id === recipeId);
  }

  return isRecipeDone;
}

export default getDoneRecipes;
