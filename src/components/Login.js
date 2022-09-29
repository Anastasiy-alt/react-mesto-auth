import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import * as auth from './auth';
import '../index.css';


function Login ({InfoTooltip, handleLogin}) {

  const [userData, setUserData] = React.useState({ email: "", password: "", confirmPassword: "" });
  const history = useHistory();
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return;
    }
    auth.authorize(userData.email, userData.password)
      .then((data) => {
        if (data) {
          setUserData({
            email: '',
            password: ''
          }, () => {
            handleLogin(); // обновляем стейт внутри App.js
            history.push('/main'); // и переадресуем пользователя! 
          })
        }
      })
      .catch(err => console.log(err)); // запускается, если пользователь не найден 
  }
      return(
        <div className="sign login">
          <p className="sign__welcome">
            Вход
          </p>
          <form className="sign__form" onSubmit={handleSubmit}>
            <input className="sign__input popup__item" required id="email" name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange} />
            <input className="sign__input popup__item" required id="password" name="password" type="password" placeholder="Пароль" value={userData.password} onChange={handleChange} />
            <div className="login__button-container">
              <button type="submit" className="button popup__button sign__link" onClick={InfoTooltip}>Войти</button>
            </div>
          </form>
        </div>
      );
  }


export default withRouter(Login);
