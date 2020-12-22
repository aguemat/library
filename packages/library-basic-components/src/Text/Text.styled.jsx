import styled, { css } from "styled-components";

export const TextP = styled.p`
  ${({ theme, themeFontSize, align, fontSize }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.fonts.family};
        font-size: ${themeFontSize
          ? theme.fonts.size[themeFontSize]
          : theme.fonts.size.md};
        text-align: ${align ? align : theme.text.align};
      `;
    } else {
      return css`
        font-size: ${fontSize ? `${fontSize}rem` : "0.875rem"};
        text-align: ${align ? align : "justify"};
      `;
    }
  }}
`;

export const TextSpan = styled.span`
  ${({ theme, themeFontSize, align, fontSize }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        font-family: ${theme.fonts.family};
        font-size: ${themeFontSize
          ? theme.fonts.size[themeFontSize]
          : theme.fonts.size.md};
        text-align: ${align ? align : theme.text.align};
      `;
    } else {
      return css`
        font-size: ${fontSize ? `${fontSize}rem` : "0.875rem"};
        text-align: ${align ? align : "left"};
      `;
    }
  }}
`;
