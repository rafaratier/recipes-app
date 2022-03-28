import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';
import FoodsPage from './pages/FoodsPage';
import DrinksPage from './pages/DrinksPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Route path="/foods" component={ FoodsPage } />
        <Route path="/drinks" component={ DrinksPage } />
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
