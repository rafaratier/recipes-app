import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeProvider from './context/RecipeProvider';
import Login from './pages/Login';
import FoodsPage from './pages/FoodsPage';
import DrinksPage from './pages/DrinksPage';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import Profile from './pages/Profile';
import Nationalities from './pages/Nationalities';

function App() {
  return (
    <RecipeProvider>
      <div className="meals">
        <Switch>
          <Route exact path="/" component={ () => <Login /> } />
          <Route exact path="/foods" component={ () => <FoodsPage /> } />
          <Route exact path="/drinks" component={ () => <DrinksPage /> } />
          <Route exact path="/explore" component={ () => <Explore /> } />
          <Route exact path="/explore/foods" component={ () => <ExploreFoods /> } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ () => <ExploreFoodsIngredients /> }
          />
          <Route exact path="/explore/drinks" component={ () => <ExploreDrinks /> } />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ () => <ExploreDrinksIngredients /> }
          />
          <Route exact path="/profile" component={ () => <Profile /> } />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ () => <Nationalities /> }
          />
        </Switch>
      </div>
    </RecipeProvider>
  );
}

export default App;
