import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function DrinkInProgress() {
  const { id } = useParams();

  return (
    <div className="in-progress-page">
      <h1>pagina de receitas em progresso</h1>
      <h2>{ id }</h2>
    </div>
  );
}

export default DrinkInProgress;
