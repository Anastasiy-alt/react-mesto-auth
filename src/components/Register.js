import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import * as auth from './auth';
import '../index.css';

function Register({ InfoTooltip }) {
  const [userData, setUserData] = React.useState({ email: "", password: "", confirmPassword: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((state) => ({ ...state, [name]: value }));
  }
  
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      const { password, email } = userData;
      auth.register(password, email).then((res) => {
        if (res) {
          setUserData({
            message: ''
          }, () => {
            history.push('/sign-in');
          })
        } else {
          setUserData({
            message: 'Что-то пошло не так!'
          })
        }
      });
    }
  }

  return (

    <div className="sign register">
      <p className="sign__welcome">
        Регистрация
      </p>
      <form className="sign__form" onSubmit={handleSubmit}>
        <input className="sign__input popup__item" id="email" name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input className="sign__input popup__item" id="password" name="password" type="password" placeholder="Пароль" value={userData.password} onChange={handleChange} />
        <div className="sign__button-container">
          <button type="submit" className="button popup__button sign__link" onSubmit={handleSubmit} onClick={InfoTooltip}>Зарегистрироваться</button>
        </div>
      </form>
      <div className="sign__signin">
        <p className="sign__signin-text">Уже зарегистрированы?</p>&nbsp;
        <Link to="/sign-in" className="sign__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default withRouter(Register);