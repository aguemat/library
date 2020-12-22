import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LinkRouterDomStyled = styled(Link)`
  ${({ theme, variant }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        color: ${theme.links[variant].color};
        font-size: ${theme.fonts.size.md};

        &:hover {
          color: ${theme.links[variant].colorHover};
        }
      `;
    } else {
      return css`
        color: blue;

        &:hover {
          text-decoration: underline;
        }
      `;
    }
  }}
`;

export const LinkNormalStyled = styled.a`
  ${({ theme, variant }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        color: ${theme.links[variant].color};
        font-size: ${theme.fonts.size.md};

        &:hover {
          color: ${theme.links[variant].colorHover};
        }
      `;
    } else {
      return css`
        color: blue;

        &:hover {
          text-decoration: underline;
        }
      `;
    }
  }}
`;
