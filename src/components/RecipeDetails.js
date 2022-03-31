import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import getIngridientsAndMeasures from '../helpers/getIngridientsAndMeasures';
import getVideoId from '../helpers/getEmbeddedVideo';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import {
  isRecipeFavorite,
  saveFavoriteRecipes,
  removeRecipeFromFavorites,
} from '../helpers/handleFavoriteRecipes';

function RecipeDetails(props) {
  const { recipe } = props;

  const [isFavorite, setFavorite] = useState();

  const [isLinkCopied, copyLink] = useState(false);

  const [videoId, setVideoId] = useState();

  useEffect(() => {
    setFavorite(isRecipeFavorite(recipe));

    if (recipe.strYoutube) {
      setVideoId(getVideoId(recipe.strYoutube));
    }
  }, [recipe]);

  useEffect(() => {
    if (isFavorite === true) {
      saveFavoriteRecipes(recipe);
    }
    if (isFavorite === false) {
      removeRecipeFromFavorites(recipe);
    }
  }, [isFavorite, recipe]);

  const handleShareClick = () => {
    copy(window.location.href);
    copyLink((prevState) => !prevState);
  };

  const ingredientsWithMeasures = getIngridientsAndMeasures(recipe);

  // const YOUTUBE_VIDEO_ID = getVideoId(recipe.strYoutube);

  return (
    <div>
      <div className="recipe-details-img-container">
        <img
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          alt={ recipe.strMeal || recipe.strDrink }
          data-testid="recipe-photo"
        />
      </div>

      <h3 data-testid="recipe-title">{ recipe.strMeal || recipe.strDrink }</h3>

      <h4 data-testid="recipe-category">{ recipe.strAlcoholic || recipe.strCategory}</h4>

      <button
        type="button"
        alt="favorite recipe button"
        onClick={ () => setFavorite((prevState) => !prevState) }
      >
        <img
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favorite recipe"
        />
      </button>

      <button
        type="button"
        alt="share"
        onClick={ handleShareClick }
      >
        { isLinkCopied ? 'Link copied!' : <img
          data-testid="share-btn"
          src={ shareIcon }
          alt="share recipe"
        />}
      </button>

      <div>
        <h5>ingredients</h5>
        {ingredientsWithMeasures.map((item, index) => (
          <div
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>

      <div>
        <h5>Instructions</h5>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </div>

      { videoId && videoId.length > 0
        ? (
          <div className="iframe-container">
            <iframe
              data-testid="video"
              title={ recipe.strMeal || recipe.strDrink }
              width="560"
              height="315"
              src={ `//www.youtube.com/embed/${videoId}` }
              frameBorder="0"
              allowFullScreen
            />
          </div>) : ''}

    </div>
  );
}

RecipeDetails.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeDetails;
