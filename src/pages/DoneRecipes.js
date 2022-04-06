import React from 'react';
import DoneCard from '../components/DoneCard';
import Header from '../components/Header';

function DoneRecipes() {
  const doneInStorage = localStorage.getItem('doneRecipes');
  const doneRecipes = JSON.parse(doneInStorage);

  return (
    <div>
      <Header title="Done Recipes" />
      <button type="button" data-testid="filter-by-all-btn">
        All
      </button>
      <button type="button" data-testid="filter-by-food-btn">
        Food
      </button>
      <button type="button" data-testid="filter-by-drink-btn">
        Drink
      </button>

      { doneRecipes === null
        ? <h1>Nenhuma receita feita</h1>
        : doneRecipes.map((done, index) => (
          <DoneCard
            key={ index }
            id={ done.id }
            type={ done.type }
            image={ done.image }
            nationality={ done.nationality }
            category={ done.category }
            recipe={ done.name }
            date={ done.doneDate }
            tags={ done.tags }
            index={ index }
            alcoholicOrnot={ done.alcoholicOrnot }
          />
        )) }
    </div>
  );
}

export default DoneRecipes;
