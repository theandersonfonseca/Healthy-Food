import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;

    @media (max-width: 1050px) {
      height: auto;
      padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall};
    }
  `}
`;

export const Image = styled.img`
  flex: 1;
  object-fit: cover;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1050px) {
    align-items: center;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 42rem;

    button {
      align-self: flex-start;
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
    line-height: 1.3;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
    line-height: 1.6;
  `}
`;
