import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import {
  isRecipeFavorite,
  handleFavorites,
} from '../helpers/handleFavoriteRecipes';

function FavoriteAndShareButtons(props) {
  const { recipe } = props;

  const { id } = useParams();

  const [isFavorite, setFavorite] = useState();

  const [isLinkCopied, copyLink] = useState(false);

  useEffect(() => {
    const fav = isRecipeFavorite(id);
    setFavorite(fav);
  }, [id, recipe]);

  const handleFavClick = (recipeObj) => {
    handleFavorites(recipeObj, id);
    const fav = isRecipeFavorite(id);
    setFavorite((prevState) => {
      if (prevState !== fav) {
        return fav;
      }
    });
  };

  const handleShareClick = () => {
    copy(window.location.href.replace('/in-progress', ''));
    copyLink((prevState) => !prevState);
  };

  return (
    <div>

      <button
        type="button"
        onClick={ () => handleFavClick(recipe) }
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
