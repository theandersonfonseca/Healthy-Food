import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;

    form {
      margin-top: ${theme.spacings.xsmall};
    }

    @media (max-width: 1400px) {
      height: auto;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30rem;

  @media (max-width: 1400px) {
    margin-top: 0;
    padding: 10rem 0;
    justify-content: center;
  }
`;

export const FirstWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;

    button {
      margin-left: ${theme.spacings.xxsmall};
    }

    @media (max-width: 1400px) {
      width: 100%;
      max-width: 55rem;
    }
  `}
`;

export const SecondWrapper = styled.div`
  flex: 2;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
    line-height: 1.3;

    @media (max-width: 1400px) {
      font-size: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media (max-width: 1400px) {
    display: none;
  }
`;
