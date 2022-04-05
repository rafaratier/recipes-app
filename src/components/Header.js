import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import { fetchByIngredient,
  fetchByName,
  fetchByFirstLetter } from '../service/fetchByFood';
import { fetchDrinkByIngredient,
  fetchDrinkByName,
  fetchDrinkByFirstLetter } from '../service/fetchByDrink';
import RecipeContext from '../context/RecipeContext';

function Header(props) {
  const { title } = props;

  const { setRecipes } = useContext(RecipeContext);

  const [arrMeals, setMeals] = useState([]);
  const [arrDrinks, setDrinks] = useState([]);

  useEffect(() => {
    const sendToContext = () => (
      setRecipes(() => (
        {
          meals: arrMeals,
          drinks: arrDrinks,
        }
      ))
    );
    sendToContext();
  }, [setRecipes, arrMeals, arrDrinks]);

  const [state, setState] = useState(
    { searchInput: '', isVisible: false, searchFor: '',
    },
  );

  const handleSearchFor = (value) => {
    setState((prevState) => ({ ...prevState, searchFor: value }));
  };

  const handleSearch = ({ value }) => {
    setState((prevState) => ({ ...prevState, searchInput: value }));
  };

  const renderSearchInput = () => {
    if (!state.isVisible) {
      return setState({ isVisible: true });
    }
    if (state.isVisible) {
      return setState({ isVisible: false });
    }
  };

  const fetchByMeals = async () => {
    if (state.searchFor === 'ingredient') {
      return setMeals(await fetchByIngredient(state.searchInput));
    }
    if (state.searchFor === 'name') {
      return setMeals(await fetchByName(state.searchInput));
    }
    if (state.searchFor === 'first letter') {
      if (state.searchInput.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      return setMeals(await fetchByFirstLetter(state.searchInput));
    }
  };

  const fetchByDrinks = async () => {
    if (state.searchFor === 'ingredient') {
      return setDrinks(await fetchDrinkByIngredient(state.searchInput));
    }
    if (state.searchFor === 'name') {
      return setDrinks(await fetchDrinkByName(state.searchInput));
    }
    if (state.searchFor === 'first letter') {
      if (state.searchInput.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      return setDrinks(await fetchDrinkByFirstLetter(state.searchInput));
    }
  };

  const renderSearchButton = () => (
    <button
      type="button"
      data-testid="search-top-btn"
      onClick={ renderSearchInput }
      src={ searchIcon }
    >
      <img
        src={ searchIcon }
        alt="searchIcon"
      />
    </button>
  );

  return (
    <section>
      <header>
        <div className="header-content">
          <Link
            to="/profile"
            data-testid="profile-top-btn"
            src={ profileIcon }
          >
            <img
              src={ profileIcon }
              alt="profileImage"
            />
          </Link>

          <h1 data-testid="page-title">{title}</h1>
          { title === 'Explore Nationalities' && renderSearchButton() }

          { title === 'Foods' && renderSearchButton() }

          { title === 'Drinks' && renderSearchButton() }

          { title.includes('Explore') && !renderSearchButton() }

          { title === 'Profile' && !renderSearchButton()}

          { title === 'Done Recipes' && !renderSearchButton() }

          { title === 'Favorite Recipes' && !renderSearchButton() }
        </div>
      </header>
      <div className="searchInput-container">
        {
          state.isVisible && SearchBar(
            handleSearch,
            handleSearchFor,
            fetchByMeals,
            fetchByDrinks,
          )
        }
      </div>
    </section>
  );
}

Header.propTypes = {
  // history: PropTypes.shape({
  //   push: PropTypes.func,
  // }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
