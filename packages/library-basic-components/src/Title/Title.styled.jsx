import styled, { css } from "styled-components";

export const TitleH1 = styled.h1`
  ${({ theme }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.title.h1.family};
        font-size: ${theme.title.h1.size};
        margin-bottom: 1rem;
      `;
    } else {
      return css``;
    }
  }}
`;

export const TitleH2 = styled.h2`
  ${({ theme }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.title.h2.family};
        font-size: ${theme.title.h2.size};
        margin-bottom: 1rem;
      `;
    } else {
      return css``;
    }
  }}
`;

export const TitleH3 = styled.h3`
  ${({ theme }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.title.h3.family};
        font-size: ${theme.title.h3.size};
        margin-bottom: 1rem;
      `;
    } else {
      return css``;
    }
  }}
`;

export const TitleH4 = styled.h4`
  ${({ theme }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.title.h4.family};
        font-size: ${theme.title.h4.size};
        margin-bottom: 1rem;
      `;
    } else {
      return css``;
    }
  }}
`;

export const TitleH5 = styled.h5`
  ${({ theme }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.title.h5.family};
        font-size: ${theme.title.h5.size};
        margin-bottom: 1rem;
      `;
    } else {
      return css``;
    }
  }}
`;
