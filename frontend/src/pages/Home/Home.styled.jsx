import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import img from '../../assets/images/hero-background.jpg';

export const HomeWrapper = styled.div`
  padding: 225px 0;
  background-image: url(${img});
  background-position: center;
`;
export const Title = styled.h1`
  margin-bottom: 20px;

  text-transform: uppercase;
  text-align: center;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 600px;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${theme.color.brand};
`;
