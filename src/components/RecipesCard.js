import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipesCard(props) {
  const { recipeThumbnail, recipeName, index, recipeId, cardType, recipeType } = props;

  const { pathname } = useLocation();

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
        data-testid={ cardType === 'recipe'
          ? `${index}-${cardType}-name` : `${index}-${cardType}-title` }
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
};

export default RecipesCard;
