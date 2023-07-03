import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid ${theme.color.headerBorder};
  background-color: ${theme.color.white};
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const AuthList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
  padding: 15px;
  margin: 0 auto;
`;

export const LogoSpan = styled.span`
  color: ${theme.color.brand};
`;

export const Logo = styled.a`
  font-size: 26px;
  font-weight: 500;
`;

export const HeaderItem = styled.li`
  font-size: 18px;
`;
