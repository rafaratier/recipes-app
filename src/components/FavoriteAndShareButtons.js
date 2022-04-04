import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import {
  isRecipeFavorite,
  saveFavoriteRecipes,
  removeRecipeFromFavorites,
} from '../helpers/handleFavoriteRecipes';

function FavoriteAndShareButtons(props) {
  const { recipe } = props;

  const [isFavorite, setFavorite] = useState();

  const [isLinkCopied, copyLink] = useState(false);

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

  const handleShareClick = () => {
    copy(window.location.href);
    copyLink((prevState) => !prevState);
  };

  return (
    <div>

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

    </div>
  );
}

FavoriteAndShareButtons.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default FavoriteAndShareButtons;
