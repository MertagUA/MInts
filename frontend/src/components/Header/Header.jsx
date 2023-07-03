import {
  AuthList,
  Container,
  HeaderItem,
  HeaderStyled,
  Logo,
  LogoSpan,
  NavList,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo href="/">
          <LogoSpan>M</LogoSpan>Ints
        </Logo>
        <nav>
          <NavList>
            <HeaderItem>
              <a href="/interests">Interests</a>
            </HeaderItem>
            <HeaderItem>
              <a href="/profile">Profile</a>
            </HeaderItem>
            <HeaderItem>
              <a href="/friends">Friends</a>
            </HeaderItem>
          </NavList>
        </nav>

        <AuthList>
          <HeaderItem>
            <a href="/register">Register</a>
          </HeaderItem>
          <HeaderItem>
            <a href="/login">Login</a>
          </HeaderItem>
        </AuthList>
      </Container>
    </HeaderStyled>
  );
};
