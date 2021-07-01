import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.lightGray};

    @media (max-width: 900px) {
     height: auto;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.large} 0;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 51rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.secondary};
    text-align: center;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
    text-align: center;
    line-height: 1.4;
  `}
`;

export const Recipes = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.xxlarge};

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `}
`;
