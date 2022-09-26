import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Register () {
  return (
    <div className="register">
        <p className="register__welcome">
          Регистрация
        </p>
        <form className="register__form">
          <input className="register__input popup__item" id="email" name="email" type="email" placeholder="Email" />
          <input className="register__input popup__item" id="password" name="password" type="password" placeholder="Пароль" />
          <div className="register__button-container">
            <button type="submit" className="button popup__button register__link">Зарегистрироваться</button>
          </div>
        </form>
        <div className="register__signin">
          <p className="register__signin-text">Уже зарегистрированы?</p>&nbsp;
          <Link to="login" className="register__login-link">Войти</Link>
        </div>
      </div>
  )
}

class Registere extends React.Component {
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
      <div className="register">
        <p className="register__welcome">
          Регистрация
        </p>
        <form onSubmit={this.handleSubmit} className="register__form">
          <input className="register__input popup__item" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input className="register__input popup__item" id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Пароль" />
          <div className="register__button-container">
            <button type="submit" onSubmit={this.handleSubmit} className="register__link">Зарегистрироваться</button>
          </div>
        </form>
        <div className="register__signin">
          <p>Уже зарегистрированы?</p>
          <Link to="login" className="register__login-link">Войти</Link>
        </div>
      </div>
    );
  }

}

export default Register;
