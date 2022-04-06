import React, { useState, useEffect } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';
import {
  getNationalities, getRecipesByNationality,
} from '../services/fetchNationalitiesRecipes';
import { getAllFoodRecipes } from '../services/fetchFoodRecipes';

function Nationalities() {
  const [nationalities, setNationalities] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState('all');
  const [recipes, setRecipes] = useState();
  const CARDS_LIMIT = 11;

  const getListNationalities = async () => {
    getNationalities()
      .then((response) => {
        setNationalities(response.meals);
      });
  };

  useEffect(() => { getListNationalities(); }, []);

  useEffect(() => {
    const getRecipes = async () => {
      if (selectedNationality !== 'all') {
        const request = await getRecipesByNationality(selectedNationality);
        const result = await request.meals;
        setRecipes(result);
      } else {
        const request = await getAllFoodRecipes();
        const allRecipes = await request.meals;
        setRecipes(allRecipes);
      }
    };
    getRecipes();
  }, [selectedNationality]);

  return (
    <>
      <Header title="Explore Nationalities" />
      <div className="dropdown">
        <select
          data-testid="explore-by-nationality-dropdown"
          value={ selectedNationality }
          onChange={ (event) => setSelectedNationality(event.target.value) }
        >
          <option
            value="all"
            name="all"
            data-testid="All-option"
          >
            All
          </option>
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
      { recipes && recipes.map((recipe, index) => {
        if (index <= CARDS_LIMIT) {
          return (
            <RecipesCard
              key={ index }
              index={ index }
              recipeId={ recipe.idMeal }
              recipeThumbnail={ recipe.strMealThumb }
              recipeName={ recipe.strMeal }
              recipeType="foods"
              cardType="nationality"
              searchType="card"
            />
          );
        }
        return false;
      })}

      <FooterMenu />
    </>
  );
}

export default Nationalities;
