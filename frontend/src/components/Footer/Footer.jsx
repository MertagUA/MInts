import { Container, FooterLink, FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <ul>
          <li>
            <FooterLink href="mailto:mertag_nu@ukr.net">
              mertag_nu@ukr.net
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://github.com/MertagUA"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </FooterLink>
          </li>
        </ul>
      </Container>
    </FooterStyled>
  );
};
