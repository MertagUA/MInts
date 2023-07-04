import {
  AuthList,
  Container,
  HeaderItem,
  HeaderStyled,
  Logo,
  LogoSpan,
  NavList,
} from './Header.styled';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo to="/">
          <LogoSpan>M</LogoSpan>Ints
        </Logo>
        <nav>
          <NavList>
            <HeaderItem>
              <NavLink to="/interests">Interests</NavLink>
            </HeaderItem>
            <HeaderItem>
              <NavLink to="/profile">Profile</NavLink>
            </HeaderItem>
            <HeaderItem>
              <NavLink to="/friends">Friends</NavLink>
            </HeaderItem>
          </NavList>
        </nav>

        <AuthList>
          <HeaderItem>
            <NavLink to="/register">Register</NavLink>
          </HeaderItem>
          <HeaderItem>
            <NavLink to="/login">Login</NavLink>
          </HeaderItem>
        </AuthList>
      </Container>
    </HeaderStyled>
  );
};
