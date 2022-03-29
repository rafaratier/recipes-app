import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import RecipeProvider from './context/RecipeProvider';
import FoodsPage from './pages/FoodsPage';
import DrinksPage from './pages/DrinksPage';
import FoodDetails from './components/FoodDetails';
import DrinksDetails from './components/DrinksDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipeProvider>
      <div className="meals">
        <Switch>
          <Route exact path="/" component={ () => <Login /> } />
          <Route exact path="/foods" component={ () => <FoodsPage /> } />
          <Route exact path="/drinks" component={ DrinksPage } />
          <Route exact path="/foods/:id" component={ FoodDetails } />
          <Route exact path="/drinks/:id" component={ DrinksDetails } />
        </Switch>
      </div>
    </RecipeProvider>
  );
}

export default App;
