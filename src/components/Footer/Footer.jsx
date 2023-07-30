import Container from 'components/Container/Container';
import { FooterWrapper, Wrapper, Copyright } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>© MOVIE.search 2023</Copyright>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
