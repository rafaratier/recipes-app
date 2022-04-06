import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
    alcoholicOrNot,
  } = props;

  const url = `${type}s/${id}`;

  const [isLinkCopied, copyLink] = useState(false);
  const n = nationality;

  const handleShareClick = () => {
    copy(window.location.href.replace('done-recipes', url));
    copyLink((prevState) => !prevState);
  };

  return (
    <div className="done-card">
      <Link
        to={ url }
        className="done-img"
      >
        <img
          className="done-img"
          src={ image }
          alt="imagem"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div className="done-infos">
        { alcoholicOrNot !== ''
          ? <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>
          : <p data-testid={ `${index}-horizontal-top-text` }>{`${n} - ${category}`}</p>}
        <Link
          to={ url }
        >
          <h3
            data-testid={ `${index}-horizontal-name` }
          >
            {recipe}
          </h3>
        </Link>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {date}
        </p>

      </div>
      <div className="tags-and-share">
        <div className="tags">
          { tags && tags.map((tag) => (
            <span
              key={ tag }
              className="tags-box"
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </span>
          ))}
        </div>
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
  alcoholicOrNot: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
};

export default DoneCard;
