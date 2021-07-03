import Container from '../Container';
import * as S from './styles';

export default function Footer() {
  return (
    <Container>
      <S.Wrapper>
        <S.Copyright>© Copyrights 2019 Stack. All Rights Reserved.</S.Copyright>

        <S.Links>
          <a href='https://www.google.com/'>Privacy Policy</a>
          <a href='https://www.google.com/'>Terms and Conditions</a>
        </S.Links>
      </S.Wrapper>
    </Container>
  );
}
