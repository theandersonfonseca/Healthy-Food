import * as yup from 'yup';

const nomeRegex = /^[A-Z][-a-zA-Z]+$/;

const nascimentoRegex =
  /^((((19|[2-9]\d)\d{2})-(0[13578]|1[02])-(0[1-9]|[12]\d|3[01]))|(((19|[2-9]\d)\d{2})-(0[13456789]|1[012])-(0[1-9]|[12]\d|30))|(((19|[2-9]\d)\d{2})-02-(0[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-02-29))$/g;

const cpfRegex = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/;

const cepRegex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

const estadoRegex =
  /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i;

export const validationSchema = yup.object({
  nome: yup
    .string()
    .required('Preencha um valor')
    .matches(nomeRegex, 'Nome inválido'),
  nascimento: yup
    .string()
    .required('Preencha um valor')
    .matches(nascimentoRegex, 'Data de nascimento inválida'),
  cpf: yup
    .string()
    .required('Preencha um valor')
    .matches(cpfRegex, 'CPF inválido'),
  cep: yup
    .string()
    .required('Preencha um valor')
    .matches(cepRegex, 'CEP inválido'),
  logradouro: yup.string().required('Preencha um valor'),
  bairro: yup.string().required('Preencha um valor'),
  numero: yup.number().required('Preencha um valor'),
  cidade: yup.string().required('Preencha um valor'),
  estado: yup
    .string()
    .required('Preencha um valor')
    .matches(estadoRegex, 'Estado inválido'),
});
