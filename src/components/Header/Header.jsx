import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <div>
            <nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/movies">MOVIES</NavLink>
            </nav>
        </div>
        </header>

    );
};

export default Header;