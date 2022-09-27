import logo from '../images/Vector-2.svg';
import { Link, Switch, Route } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Место." className="header__logo" />
            <Switch>
            <Route exact path="/sign-in">
                         <Link to="/sign-up" className="header__link button">Регистрация</Link>
                    </Route>
                    <Route exact path="/sign-up">
                         <Link to="/sign-in" className="header__link button">Войти</Link>
                    </Route>
            </Switch>
        </header>
    )
};

export default Header;