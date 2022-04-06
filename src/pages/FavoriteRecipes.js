import React, { useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';

function FavoriteRecipes() {
  const favoriteInStorage = localStorage.getItem('favoriteRecipes');
  const favoritedRecipes = JSON.parse(favoriteInStorage);
  const [filterButton, setFilterButton] = useState('all');
  const [close, setClose] = useState(true);

  const handleClick = (e) => {
    setFilterButton(e.target.value);
  };

  const selectClose = () => {
    setClose(!close);
  };

  return (
    <div>
      <Header title="favorite Recipes" />
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

      { favoritedRecipes === null && <h1>Nenhuma receita favoritada</h1> }
      { filterButton === 'all' && favoritedRecipes.map((favorite, index) => (
        <FavoriteCard
          key={ index }
          id={ favorite.id }
          type={ favorite.type }
          image={ favorite.image }
          nationality={ favorite.nationality }
          category={ favorite.category }
          recipe={ favorite.name }
          index={ index }
          alcoholicOrNot={ favorite.alcoholicOrNot }
          close={ selectClose }
        />
      ))}
      { filterButton === 'food' && favoritedRecipes
        .filter((favorite) => (favorite.type === 'food')).map((favorite, index) => (
          <FavoriteCard
            key={ index }
            type={ favorite.type }
            image={ favorite.image }
            id={ favorite.id }
            nationality={ favorite.nationality }
            category={ favorite.category }
            recipe={ favorite.name }
            index={ index }
            alcoholicOrNot={ favorite.alcoholicOrNot }
          />
        ))}
      { filterButton === 'drink' && favoritedRecipes
        .filter((favorite) => (favorite.type === 'drink')).map((favorite, index) => (
          <FavoriteCard
            key={ index }
            type={ favorite.type }
            image={ favorite.image }
            nationality={ favorite.nationality }
            id={ favorite.id }
            category={ favorite.category }
            recipe={ favorite.name }
            index={ index }
            alcoholicOrNot={ favorite.alcoholicOrNot }
          />
        ))}
    </div>
  );
}

export default FavoriteRecipes;
