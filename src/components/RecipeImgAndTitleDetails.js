import React from 'react';
import PropTypes from 'prop-types';

function RecipeImgAndDetails(props) {
  const { recipe } = props;

  return (
    <>
      <div className="recipe-details-img-container">

        <img
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          alt={ recipe.strMeal || recipe.strDrink }
          data-testid="recipe-photo"
        />

      </div>

      <h3 data-testid="recipe-title">{ recipe.strMeal || recipe.strDrink }</h3>

      <h4 data-testid="recipe-category">{ recipe.strAlcoholic || recipe.strCategory}</h4>
    </>
  );
}

RecipeImgAndDetails.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeImgAndDetails;
