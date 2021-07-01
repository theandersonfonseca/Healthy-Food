import Container from '../Container';
import * as S from './styles';

export default function Footer() {
  return (
    <Container>
      <S.Wrapper>
        <S.Copyright>© Copyrights 2019 Stack. All Rights Reserved.</S.Copyright>

        <S.Links>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms and Conditions</a>
        </S.Links>
      </S.Wrapper>
    </Container>
  );
}
