
import { Main, Nav, StyledLink } from "./Header.styled";

const Header = () => {
    return (
        <Main>
            <Nav>
                <StyledLink to="/">HOME</StyledLink>
                <StyledLink to="/movies">MOVIES</StyledLink>
            </Nav>
        </Main>

    );
};

export default Header;