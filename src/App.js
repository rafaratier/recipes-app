import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';
import FoodsPage from './pages/FoodsPage';
import DrinksPage from './pages/DrinksPage';

function App() {
  return (
    <Switch>
      <RecipeProvider>
        <Route exact path="/foods" component={ () => <FoodsPage /> } />
        <Route exact path="/drinks" component={ () => <DrinksPage /> } />
      </RecipeProvider>
    </Switch>
  );
}

export default App;
