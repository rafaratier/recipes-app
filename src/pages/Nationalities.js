import React, { useState, useEffect } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import {
  getNationalities, /*  getRecipesByNationality, */
} from '../services/fetchNationalitiesRecipes';
import FoodRecipesShowCase from '../components/FoodRecipesShowCase';

function Nationalities() {
  const [nationalities, setNationalities] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState('');

  const getListNationalities = async () => {
    getNationalities()
      .then((response) => {
        setNationalities(response.meals);
      });
  };

  useEffect(() => { getListNationalities(); }, []);

  return (
    <>
      <Header title="Explore Nationalities" />
      <div className="dropdown">
        <select
          data-testid="explore-by-nationality-dropdown"
          value={ selectedNationality }
          onChange={ (event) => setSelectedNationality(event.target.value) }
        >
          {
            nationalities.map(({ strArea: area }) => (
              <option
                key={ area }
                value={ area }
                name={ area }
                data-testid={ `${area}-option` }
              >
                {area}
              </option>))
          }
        </select>
      </div>

      <FoodRecipesShowCase recipeType={ selectedNationality } />
      <FooterMenu />
    </>
  );
}

export default Nationalities;
