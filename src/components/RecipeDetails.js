import React from 'react';
import PropTypes from 'prop-types';
import getIngridientsAndMeasures from '../helpers/getIngridientsAndMeasures';

function RecipeDetails(props) {
  const { recipe } = props;

  const ingredientsWithMeasures = getIngridientsAndMeasures(recipe);

  return (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
      />

      <h3>{ recipe.strMeal }</h3>

      <h4>{ recipe.strCategory }</h4>

      {ingredientsWithMeasures.map((item, index) => (
        <div key={ index }>
          <p>{item[0]}</p>
          <p>{item[1]}</p>
        </div>
      ))}

    </div>
  );
}

RecipeDetails.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeDetails;
