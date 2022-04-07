import React, { useState, useEffect } from 'react';
import DoneCard from '../components/DoneCard';
import Header from '../components/Header';

function DoneRecipes() {
  const doneInStorage = localStorage.getItem('doneRecipes');
  const doneRecipes = JSON.parse(doneInStorage);
  const [filterButton, setFilterButton] = useState('none');

  useEffect(() => {
    if (doneRecipes !== null && filterButton === 'none') {
      setFilterButton('all');
    }
  }, [doneRecipes]);

  const handleClick = (e) => {
    setFilterButton(e.target.value);
  };

  return (
    <div>
      <Header title="Done Recipes" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="all"
        onClick={ (e) => handleClick(e) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="food"
        onClick={ (e) => handleClick(e) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="drink"
        onClick={ (e) => handleClick(e) }
      >
        Drink
      </button>

      { doneRecipes === null && <h1>Nenhuma receita feita</h1> }
      { filterButton === 'all' && doneRecipes.map((done, index) => (
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
          alcoholicOrNot={ done.alcoholicOrNot }
        />
      ))}
      { filterButton === 'food' && doneRecipes
        .filter((done) => (done.type === 'food')).map((done, index) => (
          <DoneCard
            key={ index }
            type={ done.type }
            image={ done.image }
            id={ done.id }
            nationality={ done.nationality }
            category={ done.category }
            recipe={ done.name }
            date={ done.doneDate }
            tags={ done.tags }
            index={ index }
            alcoholicOrNot={ done.alcoholicOrNot }
          />
        ))}
      { filterButton === 'drink' && doneRecipes
        .filter((done) => (done.type === 'drink')).map((done, index) => (
          <DoneCard
            key={ index }
            type={ done.type }
            image={ done.image }
            nationality={ done.nationality }
            id={ done.id }
            category={ done.category }
            recipe={ done.name }
            date={ done.doneDate }
            tags={ done.tags }
            index={ index }
            alcoholicOrNot={ done.alcoholicOrNot }
          />
        ))}
    </div>
  );
}

export default DoneRecipes;
