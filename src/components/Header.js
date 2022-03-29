import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
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
  const { title, history } = props;

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
      return setDrinks(await fetchDrinkByFirstLetter(state.searchInput));
    }
  };

  return (
    <section>
      <header>
        <div className="header-content">
          <button
            type="button"
            data-testid="profile-top-btn"
            onClick={ () => history.push('/profile') }
          >
            <img
              src={ profileIcon }
              alt="profileImage"
            />
          </button>

          <h1 data-testid="page-title">{title}</h1>

          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ renderSearchInput }
          >
            <img
              src={ searchIcon }
              alt="searchIcon"
            />
          </button>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
