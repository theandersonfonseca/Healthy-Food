import * as S from './styles';

import { Formik, Form } from 'formik';

import illustrationImage from '../../assets/images/illustration.svg';
import Button from '../Button';
import Menu from '../Menu';
import Container from '../Container';
import TextField from '../TextField';

type FormType = {
  text: string;
};

const initialValues: FormType = {
  text: '',
};

export default function IntroductionSection() {
  async function handleSubmit(values: FormType) {}

  return (
    <Container>
      <S.Wrapper>
        <Menu />

        <S.Content>
          <S.FirstWrapper>
            <S.Title>Ready for Trying a new recipe?</S.Title>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {() => (
                <Form style={{ display: 'flex' }}>
                  <TextField
                    placeholder='Search healthy recipes'
                    name='text'
                    type='text'
                  />
                  <Button type='submit'>Se</Button>
                </Form>
              )}
            </Formik>
          </S.FirstWrapper>

          <S.SecondWrapper></S.SecondWrapper>
        </S.Content>
      </S.Wrapper>

      <S.Image src={illustrationImage} />
    </Container>
  );
}
