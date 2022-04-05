import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function DoneCard(props) {
  const {
    id,
    type,
    image,
    category,
    nationality,
    recipe,
    date,
    tags,
    index,
    alcoholicOrnot,
  } = props;

  console.log(alcoholicOrnot);

  const [isLinkCopied, copyLink] = useState(false);
  const n = nationality;

  const handleShareClick = () => {
    const url = `${type}s/${id}`;
    copy(window.location.href.replace('done-recipes', url));
    copyLink((prevState) => !prevState);
  };

  return (
    <div className="done-card">
      <img
        className="done-img"
        src={ image }
        alt="imagem"
        data-testid={ `${index}-horizontal-image` }
      />
      <div className="done-infos">
        { alcoholicOrnot !== undefined
          ? <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrnot}</p>
          : <p data-testid={ `${index}-horizontal-top-text` }>{`${n} - ${category}`}</p>}

        <h3
          data-testid={ `${index}-horizontal-name` }
        >
          {recipe}
        </h3>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {date}
        </p>
        { tags && tags.map((tag) => (
          <span
            key={ tag }
            className="tags-box"
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            {tag}
          </span>
        ))}

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

DoneCard.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  recipe: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  alcoholicOrnot: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
};

export default DoneCard;
