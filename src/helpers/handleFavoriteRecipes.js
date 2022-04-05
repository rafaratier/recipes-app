export function savoToFavoritesRecipes(selectedRecipe) {
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

  const newSavedRecipesArr = savedRecipes.concat(recipe);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newSavedRecipesArr));
}

export function addRecipeToFavorites(selectedRecipe) {
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

  localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
}

export function isRecipeFavorite(id) {
  const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let isFavorite = false;

  if (savedRecipes) {
    savedRecipes.forEach((favRecipe) => {
      if (favRecipe.id === id) {
        isFavorite = true;
      }
    });
  }
  return isFavorite;
}

export function removeRecipeFromFavorites(recipeId) {
  const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const newSavedRecipesArr = savedRecipes
    .filter((recipe) => recipe.id !== recipeId);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newSavedRecipesArr));
}

export function handleFavorites(recipe, recipeId) {
  const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (savedRecipes !== null) {
    savedRecipes.forEach((favRecipe) => {
      if (favRecipe.id === recipeId) {
        console.log('entrou se tiver a receita para apagar');
        removeRecipeFromFavorites(recipeId);
      }
      if (favRecipe.id !== recipeId) {
        console.log('entrou se não tiver a receita');
        savoToFavoritesRecipes(recipe);
      }
    });
  }

  if (savedRecipes && savedRecipes.length === 0) {
    console.log('entrou array vazio');
    savoToFavoritesRecipes(recipe);
  }

  if (savedRecipes === null) {
    console.log('entrou se não tinha nada');
    addRecipeToFavorites(recipe);
  }
}
