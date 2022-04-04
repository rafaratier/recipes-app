import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeCard(props) {
  const { recipeThumbnail, recipeName, index, recipeId } = props;
  const history = useHistory();
  const location = useLocation();
  return (
    <div
      className="recipe-card"
      data-testid={ `${index}-recipe-card` }
      role="button"
      tabIndex={ 0 }
      onClick={ () => history.push(`${location.pathname}/${recipeId}`) }
      onKeyPress={ () => history.push(`${location.pathname}/${recipeId}`) }
    >
      <img
        src={ recipeThumbnail }
        alt={ `imagem de ${recipeName}` }
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {recipeName}
      </p>
    </div>
  );
}
RecipeCard.propTypes = {
  recipeThumbnail: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipeId: PropTypes.string.isRequired,
};
export default RecipeCard;
