import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function FavoriteCard(props) {
  const {
    id,
    type,
    image,
    category,
    nationality,
    recipe,
    index,
    alcoholicOrNot,
    close,
  } = props;

  const url = `${type}s/${id}`;
  const [isLinkCopied, copyLink] = useState(false);
  const n = nationality;

  const handleShareClick = () => {
    copy(window.location.href.replace('favorite-recipes', url));
    copyLink((prevState) => !prevState);
  };

  const handleFavClick = () => {
    const favoriteInStorage = localStorage.getItem('favoriteRecipes');
    const favoritedRecipes = JSON.parse(favoriteInStorage);
    const newFavs = favoritedRecipes.filter((item) => (item.id !== id));
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavs));
    close();
  };

  return (
    <div className="done-card">
      <Link
        to={ url }
        className="done-img"
      >
        <img
          className="done-img"
          src={ image }
          alt="imagem"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div className="done-infos">
        { alcoholicOrNot !== ''
          ? <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>
          : <p data-testid={ `${index}-horizontal-top-text` }>{`${n} - ${category}`}</p>}
        <Link
          to={ url }
        >
          <h3
            data-testid={ `${index}-horizontal-name` }
          >
            {recipe}
          </h3>
        </Link>
      </div>
      <div className="tags-and-share">
        <button
          type="button"
          onClick={ () => handleFavClick() }
        >

          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="favorite recipe"
          />

        </button>
        <button
          type="button"
          alt="share"
          onClick={ handleShareClick }
        >
          { isLinkCopied ? 'Link copied!' : <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="share recipe"
          />}
        </button>

      </div>
    </div>
  );
}

FavoriteCard.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  recipe: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default FavoriteCard;
