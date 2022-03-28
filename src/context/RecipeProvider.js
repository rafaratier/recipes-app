import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  return (
    <RecipeContext.Provider
      value={ {} }
    >
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: propTypes.rounded.isRequired,
};

export default RecipeProvider;
