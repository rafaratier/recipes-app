import React from 'react';
import './FooterMenu.css';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FooterMenu() {
  return (
    <footer data-testid="footer" className="footer-menu-container">
      <Link to="/drinks">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="ícone de uma taça de bebida"
        />
      </Link>

      <Link to="/explore">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="ícone de uma bússola"
        />
      </Link>

      <Link to="/foods">
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="ícone de um garfo e uma colher cruzados em X"
        />
      </Link>
    </footer>
  );
}

export default FooterMenu;

/* onde importar o footer - req 21
- Tem footer na tela de principal de receitas de comidas OK
- Tem footer na tela de principal de receitas de bebidas OK
- Tem footer na tela de explorar OK
- Tem footer na tela de explorar comidas
- Tem footer na tela de explorar bebidas
- Tem footer na tela de explorar comidas por ingrediente OK
- Tem footer na tela de explorar bebidas por ingrediente OK
- Tem footer na tela de explorar comidas por nacionalidade OK
- Tem footer na tela de perfil OK
*/
