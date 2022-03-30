import React from 'react';
import PropTypes from 'prop-types';
import getIngridientsAndMeasures from '../helpers/getIngridientsAndMeasures';
import getVideoId from '../helpers/getEmbeddedVideo';

function RecipeDetails(props) {
  const { recipe } = props;

  const ingredientsWithMeasures = getIngridientsAndMeasures(recipe);

  const YOUTUBE_VIDEO_ID = getVideoId(recipe.strYoutube);

  return (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid="recipe-photo"
      />

      <h3 data-testid="recipe-title">{ recipe.strMeal }</h3>

      <h4 data-testid="recipe-category">{ recipe.strCategory }</h4>

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

      <div className="iframe-container">
        <iframe
          data-testid="video"
          title={ recipe.strMeal }
          width="560"
          height="315"
          src={ `//www.youtube.com/embed/${YOUTUBE_VIDEO_ID}` }
          frameBorder="0"
          allowFullScreen
        />
      </div>

    </div>
  );
}

RecipeDetails.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeDetails;
