import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Registere () {
  return (
    <div className="sign">
        <p className="sign__welcome">
          Регистрация
        </p>
        <form className="sign__form">
          <input className="sign__input popup__item" id="email" name="email" type="email" placeholder="Email" />
          <input className="sign__input popup__item" id="password" name="password" type="password" placeholder="Пароль" />
          <div className="sign__button-container">
            <button type="submit" className="button popup__button sign__link">Зарегистрироваться</button>
          </div>
        </form>
        <div className="sign__signin">
          <p className="sign__signin-text">Уже зарегистрированы?</p>&nbsp;
          <Link to="login" className="sign__login-link">Войти</Link>
        </div>
      </div>
  )
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // здесь обработчик регистрации
  }
  render() {
    return (
      <div className="sign register">
          <p className="sign__welcome">
            Регистрация
          </p>
          <form className="sign__form">
            <input className="sign__input popup__item" id="email" name="email" type="email" placeholder="Email" />
            <input className="sign__input popup__item" id="password" name="password" type="password" placeholder="Пароль" />
            <div className="sign__button-container">
              <button type="submit" className="button popup__button sign__link">Зарегистрироваться</button>
            </div>
          </form>
          <div className="sign__signin">
            <p className="sign__signin-text">Уже зарегистрированы?</p>&nbsp;
            <Link to="login" className="sign__login-link">Войти</Link>
          </div>
        </div>
    );
  }

}

export default Register;
