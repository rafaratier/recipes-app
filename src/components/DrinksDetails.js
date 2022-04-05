import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function DrinksDetails() {
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <h1>DETALHES DO DRINK</h1>
      <button
        type="button"
        onClick={ () => history.push(`${location.pathname}/in-progress`) }
      >
        em progresso
      </button>
    </div>
  );
}

export default DrinksDetails;
