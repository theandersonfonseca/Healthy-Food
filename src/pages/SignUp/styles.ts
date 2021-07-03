import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;

  a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  flex: 1;
  object-fit: cover;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.spacings.medium};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
    line-height: 1.3;
  `}
`;

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    width: 100%;
    max-width: 45rem;
    display: flex;
    flex-direction: column;

    form {
      width: 100%;
    }

    button {
      margin-top: ${theme.spacings.medium};
      margin-left: auto;
    }

    label {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;
