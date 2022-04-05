import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipesCard(props) {
  const { recipeThumbnail, recipeName, index,
    recipeId, cardType, recipeType, searchType } = props;

  const { pathname } = useLocation();

  const createdDataTestId = () => {
    if (searchType === 'card') {
      return `${index}-${searchType}-name`;
    }
    if (cardType === 'recipe') {
      return `${index}-${cardType}-name`;
    }
    if (cardType === 'recomendation') {
      return `${index}-${cardType}-title`;
    }
  };

  return (
    <Link
      className="recipe-card"
      data-testid={ `${index}-${cardType}-card` }
      tabIndex={ 0 }
      to={ cardType !== 'recomendation'
        ? `${pathname}/${recipeId}` : `/${recipeType}/${recipeId}` }
    >
      <img
        src={ recipeThumbnail }
        alt={ `imagem de ${recipeName}` }
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ createdDataTestId() }
      >
        {recipeName}

      </p>
    </Link>
  );
}

RecipesCard.propTypes = {
  recipeThumbnail: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipeId: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  searchType: PropTypes.string.isRequired,
};

export default RecipesCard;
