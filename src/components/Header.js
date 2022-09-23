import logo from '../images/Vector-2.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Место." className="header__logo" />
        </header>
    )
};

export default Header;