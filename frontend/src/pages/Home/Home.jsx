import { Container } from '../../commonStyles/commonStyles';
import { Button, HeroSection, HomeWrapper, Title } from './Home.styled';

export const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <HeroSection>
          <Title>Here you can note your interests!</Title>
          <Button type="button">Get started</Button>
        </HeroSection>
        {/* <section>
        <h2 style={{ textAlign: 'center' }}>Why you have to join us?</h2>
      </section> */}
      </Container>
    </HomeWrapper>
  );
};
