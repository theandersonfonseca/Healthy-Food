import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.3rem;
    padding: ${theme.spacings.small} 0;

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      height: auto;
    }
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    @media (max-width: 600px) {
      margin-top: ${theme.spacings.medium};
      order: 2;
    }
  `}
`;

export const Links = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.text};
      text-decoration: none;
      transition: ${theme.transition.fast};

      &:not(:first-child) {
        margin-left: ${theme.spacings.xsmall};
      }

      &:hover {
        text-decoration: underline;
      }

      @media (max-width: 600px) {
        &:not(:first-child) {
          margin-top: ${theme.spacings.xxsmall};
        }
      }
    }

    @media (max-width: 600px) {
      order: 1;
      display: flex;
      flex-direction: column;
    }
  `}
`;
