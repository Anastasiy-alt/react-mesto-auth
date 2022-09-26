import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../index.css';

function Logine() {
    return(
        <div className="sign">
          <p className="sign__welcome">
            Вход
          </p>
          <form className="sign__form">
            <input className="sign__input popup__item" required id="username" name="username" type="text" placeholder="Email" />
            <input className="sign__input popup__item" required id="password" name="password" type="password" placeholder="Пароль" />
            <div className="login__button-container">
              <button type="submit" className="button popup__button sign__link">Войти</button>
            </div>
          </form>
        </div>
      )
}

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    // здесь обрабатываем вход в систему
  }
  render(){
    return(
        <div className="sign login">
          <p className="sign__welcome">
            Вход
          </p>
          <form className="sign__form">
            <input className="sign__input popup__item" required id="username" name="username" type="text" placeholder="Email" />
            <input className="sign__input popup__item" required id="password" name="password" type="password" placeholder="Пароль" />
            <div className="login__button-container">
              <button type="submit" className="button popup__button sign__link">Войти</button>
            </div>
          </form>
        </div>
      );
  }
}

export default withRouter(Login);
