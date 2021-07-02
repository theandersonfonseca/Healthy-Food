import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 34.8rem;
    height: 45rem;
    width: 100%;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    box-shadow: 0 1.1rem 1.5rem 0 rgba(158, 154, 154, 0.36);
  `}
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
  `}
`;

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};
  `}
`;
export const AuthorPhoto = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
`;
export const AuthorName = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
