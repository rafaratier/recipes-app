export function saveFavoriteRecipes(selectedRecipe) {
  const recipe = {
    id: selectedRecipe.idMeal || selectedRecipe.idDrink,
    type: selectedRecipe.idMeal ? 'food' : 'drink',
    nationality: selectedRecipe.strArea ? selectedRecipe.strArea : '',
    category: selectedRecipe.strCategory ? selectedRecipe.strCategory : '',
    alcoholicOrNot: selectedRecipe.strAlcoholic ? selectedRecipe.strAlcoholic : '',
    name: selectedRecipe.strMeal ? selectedRecipe.strMeal : selectedRecipe.strDrink,
    image: selectedRecipe.strMealThumb
      ? selectedRecipe.strMealThumb : selectedRecipe.strDrinkThumb,
  };

  const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (savedRecipes !== null) {
    const newSavedRecipesArr = savedRecipes.concat(recipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newSavedRecipesArr));
  } else {
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
  }
}

export function isRecipeFavorite(selectedRecipe) {
  const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let isFavorite = false;

  if (savedRecipes !== null) {
    savedRecipes.forEach((recipe) => {
      if (recipe.id === selectedRecipe.idMeal || selectedRecipe.idDrink) {
        isFavorite = true;
      }
    });
  }

  return isFavorite;
}

export function removeRecipeFromFavorites(selectedRecipe) {
  const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  let newSavedRecipesArr = [];

  if (savedRecipes !== null) {
    newSavedRecipesArr = savedRecipes
      .filter((recipe) => recipe.id !== selectedRecipe.idMeal || selectedRecipe.idDrink);
  }

  localStorage.setItem('favoriteRecipes', JSON.stringify(newSavedRecipesArr));
}
