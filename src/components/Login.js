import React from 'react';
import '../index.css';

function Login({ onLogin }) {

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
    const { email, password } = userData
    onLogin(email, password)

  }

  return (
    <div className="sign login">
      <p className="sign__welcome">
        Вход
      </p>
      <form className="sign__form" onSubmit={handleSubmit}>
        <input className="sign__input popup__item" required id="email" name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input className="sign__input popup__item" required id="password" name="password" type="password" placeholder="Пароль" value={userData.password} onChange={handleChange} />
        <div className="login__button-container">
          <button type="submit" className="button popup__button sign__link">Войти</button>
        </div>
      </form>
    </div>
  );
}

export default Login;