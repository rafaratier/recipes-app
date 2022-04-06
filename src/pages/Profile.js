import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Header title="Profile" />

      <div className="btn-profile-container">
        <h4 data-testid="profile-email">
          {user.email}
        </h4>

        <div className="linkElement">
          <Link
            data-testid="profile-done-btn"
            to="/done-recipes"
          >
            Done Recipes
          </Link>
        </div>

        <div className="linkElement">
          <Link
            to="/favorite-recipes"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </Link>
        </div>

        <div className="linkElement">
          <Link
            to="/"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Logout
          </Link>
        </div>
      </div>

      <FooterMenu />
    </>
  );
}

export default Profile;
