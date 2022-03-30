import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

  useEffect(() => {
    setFavorite(isRecipeFavorite(recipe));
  }, [recipe]);

  useEffect(() => {
    if (isFavorite === true) {
      saveFavoriteRecipes(recipe);
    }
    if (isFavorite === false) {
      removeRecipeFromFavorites(recipe);
    }
  }, [isFavorite, recipe]);

  const ingredientsWithMeasures = getIngridientsAndMeasures(recipe);

  const YOUTUBE_VIDEO_ID = getVideoId(recipe.strYoutube);

  const isFavoriteIconStyle = {
    background: `url(${blackHeartIcon}) no-repeat`,
    width: '33px',
    height: '33px',
  };

  const notFavoriteIconStyle = {
    background: `url(${whiteHeartIcon}) no-repeat`,
    width: '30px',
    height: '30px',
  };

  return (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid="recipe-photo"
      />

      <h3 data-testid="recipe-title">{ recipe.strMeal }</h3>

      <h4 data-testid="recipe-category">{ recipe.strCategory }</h4>

      <button
        data-testid="share-btn"
        type="button"
        style={ isFavorite ? isFavoriteIconStyle : notFavoriteIconStyle }
        alt="favorite recipe"
        onClick={ () => setFavorite((prevState) => !prevState) }
      />

      <button
        data-testid="favorite-btn"
        type="button"
        style={ { background: `url(${shareIcon})`,
          width: '30px',
          height: '30px',
          backgroundRepeat: 'norepeat' } }
        alt="share"
      />

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

      <div className="iframe-container">
        <iframe
          data-testid="video"
          title={ recipe.strMeal }
          width="560"
          height="315"
          src={ `//www.youtube.com/embed/${YOUTUBE_VIDEO_ID}` }
          frameBorder="0"
          allowFullScreen
        />
      </div>

    </div>
  );
}

RecipeDetails.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeDetails;
