import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const FooterStyled = styled.footer`
  border-top: 1px solid ${theme.color.headerBorder};
  background-color: ${theme.color.white};
`;

export const FooterLink = styled.a`
  font-size: 18px;
  width: fit-content;
  :hover {
    color: ${theme.color.brand};
  }
`;

export const Container = styled.div`
  width: 1200px;
  padding: 15px;
  margin: 0 auto;
`;
