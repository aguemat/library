import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";

export const ButtonStyled = styled(Button)`
  ${({ theme, variant }) => {
    if (theme && Object.keys(theme).length > 0) {
      return css`
        color: ${theme.buttons[variant].color} !important;
        background-color: ${theme.buttons[variant].backgroundColor} !important;
        border-color: ${theme.buttons[variant].borderColor} !important;

        &:hover {
          color: ${theme.buttons[variant].colorHover} !important;
          background-color: ${theme.buttons[variant]
            .backgroundColorHover} !important;
          border-color: ${theme.buttons[variant].borderColorHover} !important;
        }

        &:focus {
          color: ${theme.buttons[variant].color} !important;
          background-color: ${theme.buttons[variant]
            .backgroundColor} !important;
          border-color: ${theme.buttons[variant].borderColor} !important;
          box-shadow: 0 0 0 0rem rgba(38, 143, 255, 0.5);
          outline: none !important;
        }

        &:active {
          outline: none !important;
        }

        &:disabled:hover {
          color: ${theme.buttons[variant].color} !important;
          background-color: ${theme.buttons[variant]
            .backgroundColor} !important;
          border-color: ${theme.buttons[variant].borderColor} !important;
        }
      `;
    } else {
      return css``;
    }
  }}
`;
