import styled, { css } from 'styled-components';
import { Button, Link } from '@aguemat/react-basic-components';

export const ButtonStyled = styled(Button)`
  margin-right: 15px;
`;

export const LinkShowFilterStyled = styled(Link)`
  ${({ theme, borderVariant }) => {
    if (theme && Object.keys(theme).length > 0 && borderVariant) {
      return css`
        margin-left: 5px;
        border: 1px solid
          ${theme.colors[borderVariant]
            ? theme.colors[borderVariant]
            : '#000000'};
        padding: 0px 5px;
        border-radius: 30px;
      `;
    } else {
      return css`
        margin-left: 5px;
        border: 1px solid #000;
        padding: 0px 5px;
        border-radius: 30px;
      `;
    }
  }}
`;

export const ButtonsContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  text-align: right;
`;

export const FilterContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px 15px;
`;

export const Animation = styled.div`
  transform-origin: top;

  transform: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 'scaleY(0)';
      case 'entered':
        return 'scaleY(1)';
      case 'exiting':
        return 'scaleY(0.2)';
      default:
        return '';
    }
  }};

  ${({ state }) => {
    switch (state) {
      case 'entered':
        return css`
          transition: transform 0.3s ease;
        `;
      case 'exiting':
        return css`
          transition: transform 0.3s ease;
        `;
      default:
        return '';
    }
  }};
`;
