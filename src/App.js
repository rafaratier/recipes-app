import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';
import FoodsPage from './pages/FoodsPage';
import DrinksPage from './pages/DrinksPage';
import FoodDetails from './components/FoodDetails';
import DrinksDetails from './components/DrinksDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Route exact path="/foods" component={ FoodsPage } />
        <Route exact path="/drinks" component={ DrinksPage } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinksDetails } />
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
