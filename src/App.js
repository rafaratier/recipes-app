import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';
import TelaPrincipalDeReceitas from './pages/TelaPrincipalDeReceitas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Route path="/teladereceitas" component={ TelaPrincipalDeReceitas } />
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
