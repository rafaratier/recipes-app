import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getVideoId from '../helpers/getEmbeddedVideo';

function RecipeVideo(props) {
  const { recipe } = props;

  const [videoId, setVideoId] = useState();

  useEffect(() => {
    if (recipe.strYoutube) {
      setVideoId(getVideoId(recipe.strYoutube));
    }
  }, [recipe]);

  return (
    <div>

      { videoId && videoId.length > 0
        ? (
          <div className="iframe-container">

            <iframe
              data-testid="video"
              title={ recipe.strMeal }
              width="560"
              height="315"
              src={ `//www.youtube.com/embed/${videoId}` }
              frameBorder="0"
              allowFullScreen
            />
          </div>) : ''}

    </div>
  );
}

RecipeVideo.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default RecipeVideo;
