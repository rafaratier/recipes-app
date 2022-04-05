import React from 'react';
import PropTypes from 'prop-types';
import getIngridientsAndMeasures from '../helpers/getIngridientsAndMeasures';

const RecipeIngredients = (props) => {
  const { recipe } = props;

  const ingredientsWithMeasures = getIngridientsAndMeasures(recipe);

  return (
    <>
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
    </>
  );
};

RecipeIngredients.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeIngredients;
