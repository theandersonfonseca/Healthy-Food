import React from 'react';
import * as S from './styles';

import { Link, useHistory } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';

import { validationSchema } from '../../utils/validationSignUp';

import Footer from '../../components/Footer';
import servicesImage from '../../assets/images/bloco_services.svg';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import useStorage from '../../hooks/useStorage';

type FormType = {
  nome: string;
  nascimento: string;
  cpf: string;
  cep: string;
  logradouro: string;
  bairro: string;
  numero: string;
  estado: string;
  cidade: string;
};

const initialValues: FormType = {
  nome: '',
  nascimento: '',
  cpf: '',
  cep: '',
  logradouro: '',
  bairro: '',
  numero: '',
  estado: '',
  cidade: '',
};

export default function SignUp() {
  const { setLocalStorage, setCookie } = useStorage();
  const history = useHistory();

  async function handleSubmit(values: FormType) {
    setLocalStorage('signup-data', values);
    setCookie('signup-data', values, 5);

    window.alert('Cadastrado com sucesso.');
    history.push(`/`);
  }

  async function fetchCEP(
    e: React.FocusEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void
  ) {
    const { value } = e.target as HTMLInputElement;

    const regex = new RegExp(/[^0-9]|[/ /]/g, '');
    const sCep = value.trim().replace(regex, '');

    if (sCep.length !== 8) return;

    const resp = await fetch(`https://viacep.com.br/ws/${value}/json`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    const data = await resp.json();

    setFieldValue('logradouro', data.logradouro);
    setFieldValue('bairro', data.bairro);
    setFieldValue('cidade', data.localidade);
    setFieldValue('estado', data.uf);
  }

  return (
    <>
      <S.Wrapper>
        <S.Image src={servicesImage} />

        <S.Content>
          <Link to='/'>
            <S.Logo>Healthy Food</S.Logo>
          </Link>

          <S.Title>Sign Up</S.Title>

          <S.FormWrapper>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {({ setFieldValue }) => (
                <Form>
                  <Field as={TextField} name='nome' label='Nome' type='text' />

                  <Field
                    as={TextField}
                    name='nascimento'
                    label='Data de Nascimento'
                    type='date'
                  />

                  <Field as={TextField} name='cpf' label='CPF' type='text' />

                  <Field
                    as={TextField}
                    name='cep'
                    label='CEP'
                    type='text'
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                      fetchCEP(e, setFieldValue)
                    }
                  />

                  <Field
                    as={TextField}
                    name='logradouro'
                    label='Logradouro'
                    type='text'
                  />

                  <Field
                    as={TextField}
                    name='bairro'
                    label='Bairro'
                    type='text'
                  />

                  <Field
                    as={TextField}
                    name='numero'
                    label='Número'
                    type='number'
                  />

                  <Field
                    as={TextField}
                    name='cidade'
                    label='Cidade'
                    type='text'
                  />

                  <Field
                    as={TextField}
                    name='estado'
                    label='Estado (UF)'
                    type='text'
                  />

                  <Button type='submit'>Confirm</Button>
                </Form>
              )}
            </Formik>
          </S.FormWrapper>
        </S.Content>
      </S.Wrapper>

      <Footer />
    </>
  );
}
