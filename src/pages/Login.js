import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';

const MIN_CHARACTERS = 6;

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (userEmail.length > MIN_CHARACTERS && password.length > MIN_CHARACTERS) {
      if (userEmail.includes('@') && userEmail.includes('.com')) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    } else {
      setIsButtonDisabled(true);
    }
  }, [userEmail, password]);

  const onUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const userInfo = { email: userEmail };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(userInfo));
    setLogin(true);
  };

  return (
    <section id="login-page">
      {login && <Redirect to="/foods" />}
      <form className="login-form">
        <div className="form-wrapper">
          <input
            name="user"
            type="email"
            onChange={ (e) => onUserEmailChange(e) }
            data-testid="email-input"
            placeholder="Digite seu e-mail"
            required
          />
          <input
            name="password"
            type="password"
            onChange={ (e) => onPasswordChange(e) }
            data-testid="password-input"
            placeholder="Digite sua senha"
            required
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            onClick={ handleSubmit }
            className="login-submit-btn"
            disabled={ isButtonDisabled }
          >
            Enter
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
