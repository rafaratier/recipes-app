import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard(props) {
  const { recipeThumbnail, recipeName } = props;
  return (
    <div>
      <img src={ recipeThumbnail } alt={ `imagem de ${recipeName}` } />
      <p>{recipeName}</p>
    </div>
  );
}

RecipeCard.propTypes = {
  recipeThumbnail: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default RecipeCard;
