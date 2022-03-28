import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeProvider from './context/RecipeProvider';
import Login from './pages/Login';
import FoodsPage from './pages/FoodsPage';

function App() {
  return (
    <RecipeProvider>
      <div className="meals">
        <Switch>
          <Route exact path="/" component={ () => <Login /> } />
          <Route exact path="/foods" component={ () => <FoodsPage /> } />
        </Switch>
      </div>
    </RecipeProvider>
  );
}

export default App;
