import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Register({ onRegister }) {
  const [userData, setUserData] = React.useState({ email: '', password: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((evt) => ({
      ...evt,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    onRegister(email, password)
  }

  return (

    <div className="sign register">
      <p className="sign__welcome">
        Регистрация
      </p>
      <form className="sign__form" onSubmit={handleSubmit}>
        <input className="sign__input popup__item" id="email" name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
        <input className="sign__input popup__item" id="password" name="password" type="password" placeholder="Пароль" value={userData.password} onChange={handleChange} required />
        <div className="sign__button-container">
          <button type="submit" className="button popup__button sign__link" onSubmit={handleSubmit}>Зарегистрироваться</button>
        </div>
      </form>
      <div className="sign__signin">
        <p className="sign__signin-text">Уже зарегистрированы?</p>&nbsp;
        <Link to="/sign-in" className="sign__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;