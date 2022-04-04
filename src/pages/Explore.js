import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import './Explore.css';

function Explore() {
  const history = useHistory();

  return (
    <div>
      <h1 className="explore-title">Explore Recipes</h1>

      <div className="container-explorer">
        <button
          className="button-explore-foods"
          type="submit"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>

        <button
          className="button-explore-drinks"
          type="submit"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Explore;
